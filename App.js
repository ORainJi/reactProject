
import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initailRouteName='HomeScreen'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFB6C1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
     >
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title:'HomeScreen'}}
        />
        <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{title:'AboutScreen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App