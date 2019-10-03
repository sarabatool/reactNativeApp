import React from 'react';
import {ScrollView, StyleSheet, Text, FlatList, View, ImageBackground, Modal} from 'react-native';
import {Card ,ListItem, Rating, Input, Button} from "react-native-elements";

class  DishDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            shouldShowModal: false,
            comments: [],
            comment: '',
            rating:0,
            author: '',

        }
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                {this.History()}
                {this.commentsView()}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.shouldShowModal}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22}}>
                        {this.addCommentModal()}
                    </View>
                </Modal>
            </ScrollView>
        );
    }


    History =()=> {
        return (
            <Card style={{flex:1}}>
                <ImageBackground

                    source={require( '../assets/images/pizza_bg.jpg')}
                    style={styles.imgStyle}
                >
                    <View style={styles.centerAlign}>
                        <Text style={styles.textStyle}>Uthappizza</Text>
                    </View>
                </ImageBackground>
                <Text style={styles.regularText}>Uttapam (aka Uttappa or Oothapam) is yet another healthy breakfast recipe from South Indian cuisine prepared with a common rice and urad dal batter used for preparing Idli and dosa.
                </Text>

                <Button
                    type="clear"
                    icon={{ type: 'font-awesome', name: 'pencil' }}
                    onPress={this.toggleCommentModal}
                />
            </Card>
        )
    };

    commentsView =() => {
        return (
            <Card title="Comments">
                <FlatList
                    style={styles.list}
                    data={this.state.comments}
                    renderItem={({item,index}) => ( this.renderListItem(item,index))}
                    keyExtractor={item => item.id.toString()}
                />
            </Card>
        )
    };

    toggleCommentModal = () => {
        this.setState( prevState => ({
            shouldShowModal: !prevState.shouldShowModal
        }));

    };

    addCommentModal =() => {
        return (
            <View style={{margin: 20, marginTop: 30 }}>
                <Rating
                    style={{ paddingVertical: 10}}
                    imageSize={20}
                    showRating
                    startingValue={0}
                    onFinishRating={number => this.setState({rating: number})}
                />
                <Input
                    leftIconContainerStyle={{marginRight:15}}
                    containerStyle={{margin:6}}
                    placeholder='Author'
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    onChangeText={value => this.setState({author: value})}
                />
                <Input
                    leftIconContainerStyle={{marginRight:10}}
                    containerStyle={{margin:6}}
                    placeholder='Comment'
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={value => this.setState({comment: value})}
                />

                <Button
                    buttonStyle={styles.submitBtn}
                    title='SUBMIT'
                    type="raised"
                    onPress={this.addComment}
                    titleStyle={styles.btnText}
                />
                <Button
                    buttonStyle={styles.cancelBtn}
                    title='CANCEL'
                    type="raised"
                    onPress={this.toggleCommentModal}
                    titleStyle={styles.btnText}
                />
        </View>
        );

    };

    renderListItem = (item, index) => {
        return (
            <ListItem
                key={index}
                title={item.comment}
                titleStyle={styles.secondaryText}
                subtitle={
                    <View style={{margin: 0 }}>
                        <Rating
                            style={{flex:1,alignItems: 'flex-start', paddingVertical: 10}}
                            readonly
                            imageSize={20}
                            startingValue={item.rating}
                        />
                        <Text style={styles.secondaryText}>{`--${item.author}, ${item.date}`}</Text>
                    </View>
                }
                hideChevron={true}
            />
        );
    };

    addComment = () => {
        const { rating, author, comment} = this.state;

         this.setState(state => {
         const comments = state.comments.concat(
             {
                 id: state.comments.length +1 ,
                 author: author,
                 comment: comment,
                 rating: rating,
                 date: new Date().toISOString()
             });
          return {
                 comments,
                 value: '',
             };
         });
         this.toggleCommentModal();

    }

}

export default DishDetail;





DishDetail.navigationOptions = {
    title: 'Dish Detail',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#EBEDEF',
    },
    cardView: {
        flex:1,
        backgroundColor: '#fff',
        margin: 16,
        shadowColor: '#D3D3D3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 3,
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        margin:10,

    },
    separator: {
        height:1,
        backgroundColor: '#D3D3D3',
        marginBottom:10,
        marginRight:10,
        marginLeft:10,
    },
    regularText: {
        color: 'black',
        fontSize: 14,
        marginTop:6,
    },

    primaryHeading: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 14,
        margin:6,
        paddingStart:10,
    },
    secondaryText: {
        color: 'black',
        fontSize: 14,
    },
    list: {
        flexGrow: 0,
    },
    stretch: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin:6,
    },
    textStyle: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,


    },
    centerAlign:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    imgStyle:{
        width:'100%',
        height:100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtn: {
        backgroundColor: 'purple',
        margin:10,
    },
    cancelBtn: {
        backgroundColor: 'grey',
        marginRight:10,
        marginLeft:10,
    },
    btnText: {
        fontSize: 14,
        fontWeight: 'bold',
        color:'white',
    }


});
