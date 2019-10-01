import React from 'react';
import { ScrollView, StyleSheet , View , Text } from 'react-native';

export default function ContactComponent() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.cardView}>
                <Text style={styles.title}>Contact Information</Text>
                <View style={styles.separator}/>
                <Text style={styles.regularText}>121, Clear Water Bay Road</Text>
                <Text style={styles.regularText}>Clear Water Bay, Kowloon</Text>
                <Text style={styles.regularText}>HONG KONG</Text>
                <Text style={styles.regularText}>Tel: +852 1234 5678</Text>
                <Text style={styles.regularText}>Fax: +852 8765 4321</Text>
                <Text style={styles.regularText}>Email:confusion@food.net</Text>

            </View>
        </ScrollView>
    );
}

ContactComponent.navigationOptions = {
    title: 'Contact Us',
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
});
