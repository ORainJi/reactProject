import { Text, View, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { styles } from '../components/styles';


const SettingScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 15 }}>
                <View style={styles.container}>
                    <Text style={styles.textTopStyle}>
                        Setting Screen
                    </Text>
                    <Button
                        title='Go to Home Tab'
                        onPress={() => navigation.navigate('HomeScreen')}
                    />
                    <View style ={{margin:15}}>
                    <Button
                        title='Open News Screen'
                        //onPress={() => navigation.navigate('*-*')}
                    />
                    </View>
                    
                    <Button
                        title='Open Profile Screen'
                        onPress={() => navigation.navigate('ProfileScreen')}
                    />
                    


                </View>
                <Text style={styles.textBottomStyle}>
                    www.tni.ac.th
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SettingScreen;

