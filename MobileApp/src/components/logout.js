import React, {Component} from 'react';
import {Text, View, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class logout extends Component {
  componentDidMount = async () => {
    try {
      await AsyncStorage.removeItem('token');
      alert('Logout Success!');
      this.props.navigation.navigate('Login');
    } catch (error) {
      alert('AsyncStorage error: ' + error.message);
    }
  };

  render() {
    return null;
  }
}
