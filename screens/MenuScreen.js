import { StyleSheet, View } from 'react-native';
import React from 'react';

import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

const MenuScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <Text style={{
            color:'blue',
            fontSize:20,
            fontWeight:'bold',
            padding:20,
          }}>
          เมนูหลัก
        </Text>
        {/* code from native based */}
        <Content>
          <ListItem icon 
            style={{marginBottom:10, marginTop:10}}
            onPress={()=> navigation.navigate('HomeStack')}
          >
            <Left>
              <Button style={{ backgroundColor: "#4682B4" }}>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>หน้าหลัก</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon 
            style={{marginBottom:10, marginTop:10}}
            onPress={()=> navigation.navigate('ProductStack')}
          >
            <Left>
              <Button style={{ backgroundColor: "#4682B4" }}>
                <Icon active name="cart" />
              </Button>
            </Left>
            <Body>
              <Text>สินค้า</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </View>
    </ScrollView>
  );
};

export default MenuScreen;
