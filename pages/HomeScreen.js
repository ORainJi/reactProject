import { Text, View, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { styles } from '../components/styles';


const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 15 }}>
                <View style={styles.container}>
                    <Text style={styles.textTopStyle}>
                        Home Screen
                    </Text>
                    <Button
                        title='Go to Setting Tab'
                        onPress={() => navigation.navigate('SettingScreen')}
                    />
                    <View style ={{margin:15}}>
                    <Button
                        title='Open News Screen'
                        //onPress={() => navigation.navigate('*-*')}
                    />
                    </View>
                </View>
                <Text style={styles.textBottomStyle}>
                    www.tni.ac.th
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

