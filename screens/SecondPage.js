import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FirstPage = ({ route }) => {
    const { value } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>React Native Pass Value From One Screen</Text>
            <Text>Values passed from first page: {value}</Text>
        </View>
    )
}

export default FirstPage

const styles =
    StyleSheet.create({

        container: {
            flex: 1,
            alignItems: 'center',
            padding: 20,

        },

        heading: {
            fontSize: 25,
            textAlign: 'center',
            marginVertical: 10,

        },

        textStyle: {
            textAlign: 'center',
            fontSize: 16,
            marginVertical: 10,

        },

        inputStyle: {
            width: '80%',
            height: 44,
            padding: 10,
            marginVertical: 10,
            backgroundColor: '#DBDBD6',

        },

    });
