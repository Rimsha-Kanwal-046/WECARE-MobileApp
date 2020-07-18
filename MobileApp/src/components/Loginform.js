import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {NavigationContainer} from '@react-navigation/native';
//import AsyncStorage from '@react-native-community/async-storage';

export default class Loginform extends Component {
  state = {
    email: '',
    password: '',
    token: '',
  };

  setEmail = val => {
    this.setState({
      email: val,
    });
  };

  setPassword = val => {
    this.setState({
      password: val,
    });
  };

  submitForm = () => {
    fetch('http://192.168.1.100:1000/api/Auth', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(res => res.json())
      .then(resjson => {
        if (JSON.stringify(resjson.errors)) {
          alert('Invalid password or Email');
        }
        if (JSON.stringify(resjson.token)) {
          AsyncStorage.setItem('token', JSON.stringify(resjson.token));

          {
            this.props.navigation.navigate('Home');
          }
        }
      })
      .catch(error => alert(error));
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputfield}
          placeholder="Username or Email"
          placeholderTextColor="#ffffff"
          type="email"
          value={this.state.email}
          onChangeText={this.setEmail}
        />
        <TextInput
          style={styles.inputfield}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          type="password"
          value={this.state.password}
          onChangeText={this.setPassword}
        />
        <TouchableOpacity
          style={styles.button}
          width="300"
          // onPress={Actions.home}
          onPress={() => this.submitForm()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#B12F31',
    alignItems: 'center',
  },
  inputfield: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    fontSize: 16,
    color: '#ffffff',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#601622',

    borderRadius: 100,
    marginVertical: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});
