import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const FirstPage = ({navigation}) => {
    const [name1, setname1] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>React Native Pass Value From One Screen</Text>
            <Text style={styles.textStyle}>Please insert your name to pass it to second screen</Text>
            <TextInput style={styles.inputStyle}
                placeholder="Enter your name"
                onChangeText={(name1) => { setname1(name1) }}
            ></TextInput>
            <Button
                title='Go Next'
                onPress={() => navigation.navigate('Second Page', {
                    value:name1
                }
                )}
            />

        </View >
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
