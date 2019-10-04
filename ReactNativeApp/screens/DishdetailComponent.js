import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, Modal, Button } from 'react-native';
import { Card, Icon, Input, Rating } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';
import { postComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: dishId => dispatch(postFavorite(dishId)),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),

});

function RenderDish(props) {
    const dish = props.dish;

    if (dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={{ uri: baseUrl + dish.image }}
            >
                <Text style={{ margin: 10 }}>{dish.description}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Icon
                        raised
                        reverse
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                    />
                    <Icon
                        raised
                        reverse
                        name={'pencil'}
                        type='font-awesome'
                        color='#512DA8'
                        onPress={() => props.toggleModal()}
                    />
                </View>

            </Card>
        );

    }
    else {
        return (<View></View>);
    }
}

function RenderComments(props) {
    const comments = props.comments;

    const renderCommentItem = ({ item, index }) => {
        return (
            <View key={index} style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.comment}</Text>
                <Rating
                    readonly
                    startingValue={item.rating}
                    style={{ paddingVertical: 3, justifyContent: 'flex-start',
                        flex: 1,
                        flexDirection: 'row' }}
                    imageSize={10}
                />
                <Text style={{ fontSize: 12 }}>{'--' + item.author + ', ' + item.date}</Text>
            </View>
        );
    }

    return (
        <Card title="Comments">
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

function RenderForm(props) {
    return (
        <ScrollView>
            <View style={styles.formRow}>
                <Rating
                    showRating
                    startingValue={0}
                    onFinishRating={(value) => props.onValueChangeRating(value)}
                    style={{ paddingVertical: 10 }}
                />
            </View>
            <View style={styles.formRow}>
                <Input
                    placeholder=' Author'
                    placeholderTextColor='gray'
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(value) => props.onValueChangeAuthor(value)}
                />
            </View>
            <View style={styles.formRow}>
                <Input
                    placeholder=' Comment'
                    placeholderTextColor='gray'
                    leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                    onChangeText={(value) => props.onValueChangeComment(value)}
                />
            </View>
            <View style={styles.formRow}>
                <Button
                    onPress={() => props.onPress()}
                    title="Submit"
                    color="#512DA8"
                    accessibilityLabel="Learn more about this 'Submit' button"
                />
            </View>
            <View style={styles.formRow}>
                <Button
                    onPress={() => props.onDismiss()}
                    title="Cancel"
                    color="gray"
                    accessibilityLabel="Learn more about this 'Cancel' button"
                />
            </View>
        </ScrollView>

    );

}

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
            showModal: false,
            rating: 0,
            author: '',
            comment: ''
        };
    }
    markFavorite(dishId) {
        this.props.postFavorite(dishId);
    }

    handleComment(dishId, rating, author, comment) {

        this.props.postComment(dishId, rating, author, comment);
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    resetForm() {
        this.setState({
            showModal: false,
            rating: 0,
            author: '',
            comment: ''
        });
    }
    closeModal() {
        this.setState({ showModal: false })
    }

    static navigationOptions = {
        title: 'Dish Detail'
    };

    render() {
        const dishId = this.props.navigation.getParam('dishId', '');
        const rating = this.state.rating;
        const author = this.state.author;
        const comment = this.state.comment;

        return (
            <ScrollView>
                <RenderDish dish={this.props.dishes.dishes[+dishId]}
                            favorite={this.props.favorites.some(el => el === dishId)}
                            onPress={() => this.markFavorite(dishId)}
                            toggleModal={() => this.toggleModal()}
                />
                <RenderComments comments={this.props.comments.comments.filter(comment => comment.dishId === dishId)} />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => { this.toggleModal(); this.resetForm() }}

                >
                    <RenderForm onPress={() => { this.handleComment(dishId, rating, author, comment); this.toggleModal() }}
                                onDismiss={() => { this.toggleModal(); this.resetForm() }}
                                onValueChangeRating={(value) => this.setState({ rating: value })}
                                onValueChangeAuthor={(value) => this.setState({ author: value })}
                                onValueChangeComment={(value) => this.setState({ comment: value })}


                    />
                </Modal>
            </ScrollView>

        );
    }

}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);
