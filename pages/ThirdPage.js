import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import React from 'react';

import { styles } from '../components/styles';

const ThirdPage = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 15 }}>
                <View style={styles.container}>
                    <Text style={styles.textTopStyle}>
                        This is the Third Page
                    </Text>
                    <Button
                        title='GO TO FIRST PAGE'
                        onPress={() => navigation.navigate('FirstPage'
                        )}
                    />
                    <Button
                        title='Go TO SECOND PAGE'
                        onPress={() => navigation.navigate('SecondPage'
                        )}
                    />
                </View>
                <Text style={styles.textBottomStyle}>
                    Thai-Nichi Institute of Technology
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default ThirdPage;

