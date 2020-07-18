import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class UserProfile extends Component {
  render() {
    return (
      <View
        style={{
          alignSelf: 'center',
          width: 300,
          height: 500,
          backgroundColor: '#dcdcdc',
          margin: 10,
          padding: 10,
        }}>
        <View
          style={{
            backgroundColor: '#B12F31',
            width: 120,
            height: 120,
            borderRadius: 60,
            alignSelf: 'center',
            marginBottom: 25,
          }}>
          <Image
            source={require('../images/navbar/user.png')}
            style={{
              width: 80,
              height: 80,
              alignSelf: 'center',
              marginTop: 5,
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginRight: 20}}>
            Name
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#B12F31'}}>
            Muiz ul haq
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginRight: 20}}>
            Email
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#B12F31'}}>
            muiz@gmail.com
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: '#B12F31',
            width: 250,
            height: 40,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 22,
              color: 'white',
              alignSelf: 'center',
            }}>
            Emergency Numbers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: '#B12F31',
            width: 250,
            height: 40,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 22,
              color: 'white',
              alignSelf: 'center',
            }}>
            Emergency Requests
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: '#B12F31',
            width: 250,
            height: 40,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 22,
              color: 'white',
              alignSelf: 'center',
            }}>
            Notifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: '#B12F31',
            width: 250,
            height: 40,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 22,
              color: 'white',
              alignSelf: 'center',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
