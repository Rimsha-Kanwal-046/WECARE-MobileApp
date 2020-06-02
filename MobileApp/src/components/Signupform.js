import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Signupform extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  setName = val => {
    this.setState({
      name: val,
    });
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

  onSignup = () => {
    fetch('http://192.168.137.177:1000/api/User', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,

        password: this.state.password,
      }),
    })
      .then(alert('Signup Successful'))
      .catch(error => alert(error));
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputfield}
          placeholder="User Name"
          placeholderTextColor="#ffffff"
          value={this.state.name}
          onChangeText={this.setName}
        />

        <TextInput
          style={styles.inputfield}
          placeholder=" Enter Email"
          placeholderTextColor="#ffffff"
          value={this.state.email}
          onChangeText={this.setEmail}
        />
        <TextInput
          style={styles.inputfield}
          placeholder="Enter Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          value={this.state.password}
          onChangeText={this.setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          width="300"
          onPress={this.onSignup}>
          <Text style={styles.buttonText} onPress={this.onSignup}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
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
