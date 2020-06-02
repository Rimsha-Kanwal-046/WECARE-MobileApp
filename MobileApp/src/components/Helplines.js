import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {Actions} from 'react-native-router-flux';

import {Linking, Platform} from 'react-native';

export default class Helplines extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Helpline Numbers</Text>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={styles.textview}
            width="300"
            onPress={() => {
              Linking.openURL('tel:1122');
            }}>
            <Image
              source={require('../images/phone.png')}
              style={{
                width: 45,
                height: 45,
                marginLeft: 20,

                alignSelf: 'center',
              }}
            />

            <Text
              style={{
                color: 'black',
                fontSize: 24,
                fontWeight: 'bold',
                marginLeft: 30,
                alignSelf: 'center',
              }}>
              Ambulance (1122)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textview}
            width="300"
            onPress={() => {
              Linking.openURL('tel:115');
            }}>
            <Image
              source={require('../images/phone.png')}
              style={{
                width: 45,
                height: 45,

                alignSelf: 'center',
                marginLeft: 20,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 24,
                fontWeight: 'bold',
                alignSelf: 'center',
                marginLeft: 30,
              }}>
              Ambulance ( 115 )
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textview}
            width="300"
            onPress={() => {
              Linking.openURL('tel:16');
            }}>
            <Image
              source={require('../images/phone.png')}
              style={{
                width: 45,
                height: 45,
                alignSelf: 'center',
                marginRight: 70,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 24,
                fontWeight: 'bold',
                marginLeft: 30,
                alignSelf: 'center',
              }}>
              Fire ( 16 )
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textview}
            width="300"
            onPress={() => {
              Linking.openURL('tel:15');
            }}>
            <Image
              source={require('../images/phone.png')}
              style={{
                width: 45,
                height: 45,
                alignSelf: 'center',
                marginRight: 70,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 24,
                fontWeight: 'bold',
                marginLeft: 10,
                alignSelf: 'center',
              }}>
              Police ( 15 )
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textview}
            width="300"
            onPress={() => {
              Linking.openURL('tel:218300-9');
            }}>
            <Image
              source={require('../images/phone.png')}
              style={{
                width: 45,
                height: 45,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 24,
                fontWeight: 'bold',
                marginLeft: 30,
                alignSelf: 'center',
              }}>
              Hospital Services
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    // alignItems: 'center',
    // justifyContent: 'center'
  },

  headingtext: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#B12F31',
  },

  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#B12F31',
    textAlign: 'center',
    fontFamily: 'Arial Rounded MT Bold',
    marginVertical: 10,
    paddingVertical: 16,
  },

  button: {
    width: 300,
    backgroundColor: '#601622',

    borderRadius: 100,
    marginVertical: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    color: '#ffffff',
  },
  btn: {
    width: 200,
    backgroundColor: '#1e90ff',
    borderRadius: 100,
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: 'black',
    alignSelf: 'center',
  },

  textview: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 320,
    height: 70,
    marginBottom: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textviewb: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 340,
    height: 200,
    justifyContent: 'center',
    marginBottom: 2,
    alignSelf: 'center',
    marginTop: 10,
  },
  textinput: {
    backgroundColor: 'white',
    width: 250,
    height: 50,
    marginBottom: 20,
    alignSelf: 'center',
  },
});
