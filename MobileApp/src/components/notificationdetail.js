import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {parse} from 'mathjs';

export default class notificationdetail extends React.Component {
  render() {
    const {navigation} = this.props;
    const sender_name = this.props.route.params.sender_name;

    const sender_location_latitude = this.props.route.params
      .sender_location_latitude;

    const sender_location_longitude = this.props.route.params
      .sender_location_longitude;

    const date = this.props.route.params.date;
    const time = this.props.route.params.time;
    const emergencytype = this.props.route.params.emergencytype;
    return (
      <View>
        <MapView
          showsUserLocation
          provider={PROVIDER_GOOGLE}
          style={{
            width: 500,
            height: 600,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 100,
          }}
          region={{
            latitude: sender_location_latitude,
            longitude: sender_location_longitude,
            latitudeDelta: 0.011,
            longitudeDelta: 0.007,
          }}>
          <MapView.Marker
            coordinate={{
              latitude: sender_location_latitude,
              longitude: sender_location_longitude,
            }}
            title={sender_name}
            pinColor={'#B12F31'}
          />
        </MapView>
        <View style={{margin: 10, padding: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text>Sender Name : </Text>
            <Text style={styles.text2}>{sender_name}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Date : </Text>
            <Text style={styles.text2}>{date}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Time : </Text>
            <Text style={styles.text2}> {time}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Emergency Type : </Text>
            <Text style={styles.text2}>{emergencytype}</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: '#f00',
  },
  text2: {fontSize: 16, color: '#B12F31', fontWeight: 'bold'},
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 100,
  },

  buttonStyle: {
    width: '93%',
    marginTop: 50,
    backgroundColor: 'red',
  },
});
