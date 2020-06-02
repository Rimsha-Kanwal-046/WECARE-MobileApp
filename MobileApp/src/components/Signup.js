import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import Signupform from '../components/Signupform';
import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Text style={{color: '#ffffff', fontSize: 18}}>Sign Up</Text>
        <Signupform />
        <View style={styles.signuplink}>
          <Text style={styles.signuplinktext}>
            Already have an account yet?
          </Text>

          <Text
            style={styles.signuplinkbutton}
            onPress={() => this.props.navigation.navigate('Login')}>
            Login
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B12F31',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signuplink: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signuplinktext: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
  },
  signuplinkbutton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});
