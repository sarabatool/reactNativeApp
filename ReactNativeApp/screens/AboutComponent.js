import React from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import * as leaders from '../shared/leaders';

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
        <ScrollView style={styles.container}>
            <View style={styles.cardView}>
                <Text style={styles.title}>Our History</Text>
                <View style={styles.separator}/>
                <Text style={styles.regularText}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us. </Text>

                 <Text style={styles.regularText}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
            </View>
        </ScrollView>
    )
};

const CorporateLeaderShip =() => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.cardView}>
                <Text style={styles.title}>Corporate Leadership</Text>
                <View style={styles.separator}/>
                <FlatList
                    style={styles.list}
                    data={leaders.default.leadersList}
                    renderItem={({item}) => ( ListItem(item))}
                />
            </View>
        </ScrollView>
    )
};

const ListItem = (item) => {
    return (
        <View style={{flex:1, flexDirection:'column'}}>
            <Image
                style={{width: 50, height: 50}}
                source={item.picture}
            />
            <Text style={styles.primaryHeading}>{item.name}</Text>
            <Text style={styles.secondaryText}>{item.description}</Text>
        </View>
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
        margin:10,
        paddingStart:10,
    },
    secondaryText: {
        color: '#D3D3D3',
        fontSize: 14,
        margin:10,
        paddingStart:10,
    },
    list: {
        flexGrow: 0,
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'contain'
    }
});
