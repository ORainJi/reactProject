import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../components/styles';

const ProfileScreen = () => {
  return (
    <View style={{flex:1  }}>
      <View style={styles.container}>
      <Text style={styles.textTopStyle}>You are on Profile Screen</Text>
      </View>
      <View>
        <Text style={styles.textBottomStyle}>
          www.tni.ac.th
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
