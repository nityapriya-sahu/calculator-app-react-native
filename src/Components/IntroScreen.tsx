import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../assets/AppLogo.png';
import Logo2 from '../assets/AppLogo-2.png';

const IntroScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={Logo}
        style={{height: 400, width: 400, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({});
