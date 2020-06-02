import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  AsyncStorage,
  Image,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {Actions} from 'react-native-router-flux';
import firebase from 'react-native-firebase';

import {Linking, Platform} from 'react-native';

export default class Highemergency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FCMToken: '',
      token: null,
      error: null,
    };
  }

  // savingdeviceid = async () => {
  //   let token = await AsyncStorage.getItem('token');
  //   this.setState({
  //     token: token.toString().substring(1, token.length - 1),
  //   });

  //   firebase
  //     .messaging()
  //     .getToken()
  //     .then(FCM => {
  //       this.setState({
  //         FCMToken: FCM,
  //       });

  //       fetch('http://192.168.43.64:1000/api/Device_id', {
  //         method: 'POST',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',

  //           'x-auth-token': this.state.token,
  //         },
  //         body: JSON.stringify({
  //           device_id: this.state.FCMToken,
  //         }),
  //       }).catch(error => alert(error));
  //       AsyncStorage.setItem('device_id', this.state.FCMToken);
  //     });
  // };

  // async componentDidMount() {
  //   await this.savingdeviceid();
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Emergency Requests</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Emergencyrequest')}>
          <View style={styles.textview}>
            <Image
              source={require('../images/location.png')}
              style={{
                width: 60,
                height: 60,
                alignSelf: 'center',
                marginRight: 30,
                marginLeft: 1,
              }}
            />
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                alignSelf: 'center',
                marginLeft: 20,
              }}>
              Nearby Users
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Emergencyno')}>
          <View style={styles.textview}>
            <Image
              source={require('../images/contact.png')}
              style={{
                width: 50,
                height: 50,
                alignSelf: 'center',
                marginRight: 20,
                // marginLeft: 20,
              }}
            />
            <Text
              style={{fontSize: 22, fontWeight: 'bold', alignSelf: 'center'}}>
              Emergency Contacts
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Helplines')}>
          <View style={styles.textview}>
            <Image
              source={require('../images/ambulance.png')}
              style={{
                width: 60,
                height: 60,
                alignSelf: 'center',
                marginRight: 80,
                // marginLeft: 20,
              }}
            />
            <Text
              style={{fontSize: 22, fontWeight: 'bold', alignSelf: 'center'}}>
              Helplines
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  heading: {
    flex: 0.7,
    fontSize: 30,
    marginBottom: 44,
    marginTop: 44,
    color: '#B12F31',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 400,
    //backgroundColor: '#dc143c'
  },
  inputfield: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    margin: 2,
  },
  label: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 50,
    margin: 2,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
    width: 80,
    height: 30,
    marginTop: 5,
    justifyContent: 'center',
  },
  textview: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    height: 130,
    marginTop: 7,
    marginBottom: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textviewb: {
    backgroundColor: '#B12F31',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 160,
    height: 100,
    marginTop: 7,
    marginBottom: 7,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
});
