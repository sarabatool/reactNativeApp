import React from 'react';
import { ScrollView, StyleSheet , View , Text } from 'react-native';
import {Card} from 'react-native-elements';

export default function ContactComponent() {
    return (
        <ScrollView style={styles.container}>
            <Card title="Contact Information" >
                <Text style={styles.regularText}>121, Clear Water Bay Road</Text>
                <Text style={styles.regularText}>Clear Water Bay, Kowloon</Text>
                <Text style={styles.regularText}>HONG KONG</Text>
                <Text style={styles.regularText}>Tel: +852 1234 5678</Text>
                <Text style={styles.regularText}>Fax: +852 8765 4321</Text>
                <Text style={styles.regularText}>Email:confusion@food.net</Text>

            </Card>
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
    regularText: {
        color: 'black',
        fontSize: 14,
        margin:10,
        paddingStart:10,
    },
});
