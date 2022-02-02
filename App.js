import { View, Text, Image } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import SettingScreen from './pages/SettingScreen';
import ProfileScreen from './pages/ProfileScreen';

const Stack = createStackNavigator();

function HomeScreenStack(){
  return(
    <Stack.Navigator
      initailRouteName='HomeScreen'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4682B4',
        },
        headerTintColor: '#FFE4E1',
        headerTitleStyle: {fontWeight: 'bold'}}}
    >
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ title: 'Home Page' }}
      />

    </Stack.Navigator>
  )
}

function SettingsScreenStack(){
  return (
    <Stack.Navigator
      initailRouteName='HomeScreen'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4682B4',
        },
        headerTintColor: '#FFE4E1',
        headerTitleStyle: {
          fontWeight: 'bold'}
      }}
    >
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ title: 'Setting Screen' }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: 'Profile Screen' }}
      />
    </Stack.Navigator>
  )
}


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({focused})=>{
              let iconName;
              if (route.name === 'HomeScreen'){
                iconName = focused
                ? <Image style={{ width: 25, height: 25}} source={require('./assets/logo1.png')}/>
                : <Image style={{ width: 25, height: 25}} source={require('./assets/logo2.png')}/>
              }else if (route.name === 'SettingScreen'){
                iconName = focused
                ? <Image style={{ width: 25, height: 25}} source={require('./assets/logo1.png')}/>
                : <Image style={{ width: 25, height: 25}} source={require('./assets/logo3.png')}/>
              }
              return iconName;
            }
          })
        }
        tabBarOptions={{
          activeTintColor:'#DDA0DD',
          inactiveTintColor:'#0000CD'
        }}
      >
        <Tab.Screen name = 'HomeScreen' component = {HomeScreenStack}/>
        <Tab.Screen name = 'SettingScreen' component = {SettingsScreenStack}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
