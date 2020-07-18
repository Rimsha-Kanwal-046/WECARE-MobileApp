import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.footer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',

            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              marginLeft: 5,
              marginRight: 40,
            }}>
            <Image
              source={require('../images/navbar/home.png')}
              style={{
                width: 30,
                height: 30,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 55,
              marginRight: 40,
            }}>
            <Image
              source={require('../images/navbar/bell.png')}
              style={{
                width: 30,
                height: 30,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 55,
              marginRight: 20,
            }}>
            <Image
              source={require('../images/navbar/user.png')}
              style={{
                width: 30,
                height: 30,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'flex-end',
  },
  footer: {
    position: 'absolute',
    backgroundColor: '#B12F31',

    width: 360,
    height: 60,
    marginTop: 506,
  },
});
