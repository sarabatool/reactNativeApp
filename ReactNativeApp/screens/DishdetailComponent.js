import React from 'react';
import {ScrollView, StyleSheet, Text, FlatList, View, ImageBackground, Button, Modal} from 'react-native';
import * as leaders from '../shared/leaders';
import {Card ,ListItem, Rating, Input} from "react-native-elements";

class  DishDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            shouldShowModal: false
        }
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                {this.History()}
                {this.CorporateLeaderShip()}
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

                <Button title='Add Comment' onPress={this.toggleCommentModal}/>
            </Card>
        )
    };

    CorporateLeaderShip =() => {
        return (
            <Card title="Comments">
                <FlatList
                    style={styles.list}
                    data={leaders.default.leadersList}
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
            <View style={{margin: 20 }}>
                <Rating
                    style={{ paddingVertical: 10}}
                    imageSize={20}
                    showRating
                />
                <Input
                    placeholder='Author'
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                />
                <Input
                    placeholder='Comment'
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                />

                <Button style={styles.submitBtn} title='Submit' onPress={console.warn('Submit Clicked')}/>
                <Button title='Cancel' onPress={this.toggleCommentModal}/>
        </View>
        );

    };

    renderListItem = (item, index) => {
        return (
            <ListItem
                key={index}
                title={item.description}
                titleStyle={styles.secondaryText}
                subtitle={
                    <View style={{margin: 0 }}>
                        <Rating
                            style={{flex:1,alignItems: 'flex-start', paddingVertical: 10}}
                            readonly
                            imageSize={20}
                        />
                        <Text style={styles.secondaryText}>{item.name}</Text>
                    </View>
                }
                hideChevron={true}
            />
        );
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
        backgroundColor: 'red'
    }


});
