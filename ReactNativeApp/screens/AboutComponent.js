import React from 'react';
import {ScrollView, StyleSheet, Text, FlatList, View, Image} from 'react-native';
import * as leaders from '../shared/leaders';
import {Card ,ListItem} from "react-native-elements";

export default function AboutComponent() {
    return (
        <ScrollView style={styles.container}>
            {History()}
            {CorporateLeaderShip()}
        </ScrollView>
    );
}

const History =()=> {
    return (
           <Card title="Our History">
                <Text style={styles.regularText}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us. </Text>

                 <Text style={styles.regularText}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
           </Card>
    )
};

const CorporateLeaderShip =() => {
    return (
        <Card title="Corporate Leadership">
            <FlatList
                    style={styles.list}
                    data={leaders.default.leadersList}
                    renderItem={({item,index}) => ( renderListItem(item,index))}
                    keyExtractor={item => item.id.toString()}
            />
        </Card>
    )
};

const renderListItem = (item, index) => {
    return (
        <ListItem
            key={index}
            title={item.name}
            subtitle={<Text style={styles.secondaryText}>{item.description}</Text>}
            hideChevron={true}
            leftAvatar={{source: require('../assets/images/profile_placeholder.jpg')}}
        />
    );
}

AboutComponent.navigationOptions = {
    title: 'About Us',
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
        margin:10,
        paddingStart:10,
    },

    primaryHeading: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 14,
        margin:6,
        paddingStart:10,
    },
    secondaryText: {
        color: '#807c7c',
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
});
