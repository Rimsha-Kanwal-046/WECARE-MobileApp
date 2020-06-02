import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 100, height: 60}}
        source={require('../images/logo.png')}
      />
      <Text style={styles.logotext}>WELCOME TO WECARE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logotext: {
    marginVertical: 15,
    fontSize: 22,
    color: '#ffffff',
  },
});
