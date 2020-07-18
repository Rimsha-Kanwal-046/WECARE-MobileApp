import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  AsyncStorage,
  Picker,
  Animated,
} from 'react-native';
import {Platform, PermissionsAndroid} from 'react-native';

import PushNotification from 'react-native-push-notification';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import firebase from 'react-native-firebase';

export default class Emergencyrequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      latitude: null,
      longitude: null,
      error: null,
      user_array: [],
      user1_location: {lat: 0, long: 0},
      user2_location: {lat: 0, long: 0},
      user3_location: {lat: 0, long: 0},
      device_id: '',
      device_id1: '',
      device_id2: '',
      device_id3: '',
      device_id4: '',
      u_latitude: null,
      u_longitude: null,
    };
  }

  componentDidMount = async () => {
    await this.getNearbyUser();
    await this.getuserLocation();
  };
  getdate = async () => {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      date: date + '/' + month + '/' + year,
      time: hours + ':' + min + ':' + sec,
    });
    this.getNearbyUser();
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        const ulatitude = position.coords.latitude;
        const ulongitude = position.coords.longitude;
        this.setState({
          u_latitude: ulatitude,
          u_longitude: ulongitude,
        });
        console.log(this.state.u_latitude);
        console.log(this.state.u_longitude);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    this.getNearbyUser();
    console.log('DATE = ' + this.state.date);
    console.log('TIME = ' + this.state.time);
  };

  async componentDidMount() {
    this.getdate();
    PushNotification.configure({
      onNotification: function(notification) {
        //   (this.popInitialNotification = true),
        console.log('NOTIFICATION:', notification);
      },
    });
  }

  async componentDidMount() {
    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          console.log('user has permission');
        } else {
          console.log("user doesn't have permission");
          this.NotiPermission();
        }
      });
  }
  componentDidMount = async () => {
    this.getNearbyUser();
    let device_id = await AsyncStorage.getItem('device_id');
    this.setState({
      device_id: device_id,
    });

    console.log('DEVICE ID = ' + this.state.device_id);
    let token = await AsyncStorage.getItem('token');
    this.setState({
      token: token.toString().substring(1, token.length - 1),
    });
    console.log('USER TOKEN = ' + this.state.token);
    this.getdate();
  };
  getNearbyUser = async () => {
    try {
      await fetch('http://192.168.1.100:1000/api/User')
        .then(res => res.json())
        .then(resjson => {
          this.setState({
            user_array: JSON.stringify(resjson),
            user1_location: {
              lat: resjson[0].location.latitude,
              long: resjson[0].location.longitude,
            },
            user2_location: {
              lat: resjson[1].location.latitude,
              long: resjson[1].location.longitude,
            },
            user3_location: {
              lat: resjson[2].location.latitude,
              long: resjson[2].location.longitude,
            },
            device_id1: resjson[0].device_id,
            device_id2: resjson[1].device_id,
            device_id3: resjson[2].device_id,
            device_id4: resjson[3].device_id,
            device_id5: resjson[4].device_id,
            r_id1: resjson[0].id,
            r_id2: resjson[1].id,
            r_id3: resjson[2].id,
            r_name1: resjson[0].name,
            r_name2: resjson[1].name,
            r_name3: resjson[2].name,
          });
          //  alert(this.state.r_name3);
        })
        .catch(err => alert(err));
    } catch (error) {
      console.log(error);
    }
    //  alert(this.state.user_array);
  };
  currentlocation = async () => {
    // alert('working');
  };

  // getuserLocation = async () => {

  //   await navigator.geolocation.getCurrentPosition(
  //     position => {
  //       this.setState({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         error: null,
  //       });
  //     },
  //     error => this.setState({error: error.message}),
  //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  //   );
  // };

  sendrequest = async () => {
    await this.getNearbyUser();

    const FIREBASE_API_KEY =
      'AAAAA_O6rIE:APA91bHcBiXfEB7kCjym_S_KDUnPa9h24PJy8s08pq83OZLlUBCIkc9h_CoK-VxrK2xq-ApCeiFHpa3ISMQFS61aQqL8Tid4lUFvFKaM51y87yYs4pRvakSQ0Os3IQQPU0VSS9IQxi9J';
    // alert(this.state.user_array);
    console.log(this.state.device_id1);
    console.log(this.state.device_id2);
    console.log(this.state.device_id3);
    console.log(this.state.device_id4);
    console.log(this.state.device_id5);
    const message = {
      registration_ids: [
        //'fL4Yyju0Ih8:APA91bELRfC_0BVq11RlfhKdlCC9a-PyV72C0vCKsrXB2UIbkVwGxWYGcNZjZa8I0PGKmruh8UYqVscD0O1CnVuffBD8xQGCClLu0VnQyeqS5d4k9Fa81Gfqci20YmZ4IOo0BUH16aDA',
        // this.state.device_id,
        //  this.state.device_id1,
        //  this.state.device_id2,
        // this.state.device_id3,
        // this.state.device_id4,
        // this.state.device_id5,
        //this.state.device_id,
        //   'eYbzT_ab3hk:APA91bG_FIUKJkmcWuC5x4Dd7WW7w4copiGMNOHzYbfh8jHLvKQv6LkVVitmxaLdebuPZdIDkeYSM8Y2M-2v71jd8lljuVrHCDyv9_RBmGFFyhpwr7zeYcPjef3JqetEO-kQQcd4MMyF',
      ],
      notification: {
        title: 'WECARE',
        body: 'Emergency Request',
        vibrate: 1,
        sound: 1,
        show_in_foreground: true,
        priority: 'high',
        content_available: true,
      },
    };
    let headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'key=' + FIREBASE_API_KEY,
    });
    let response = await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers,
      body: JSON.stringify(message),
    });

    response = await response.json();
    alert('Emergency request sent');
    console.log('Emergency request sent');
    await this.newdatastore();
  };
  // getdata = () => {
  //   fetch('http://192.168.1.9:1000/api/auth', {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       'x-auth-token': this.state.token,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(resjson => {
  //       // alert(resjson);
  //       this.setState({
  //         data: JSON.stringify(resjson),
  //         s_id: resjson._id,
  //         s_name: resjson.name,
  //         email: resjson.email,
  //         s_device_id: resjson.device_id,
  //         s_latitude: resjson.location.latitude,
  //         s_longitude: resjson.location.longitude,
  //       });
  //       // alert(this.state.s_latitude);
  //     })

  //     .catch(error => alert(error));
  // };

  // saveinfo = () => {
  //   this.getdata();
  //   this.getNearbyUser();
  //   fetch('http://192.168.1.9:1000/api/User_emergency', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       sender_id: this.state.s_id,
  //       sender_name: this.state.s_name,
  //       sender_location: {
  //         latitude: this.state.s_latitude,
  //         longitude: this.state.s_longitude,
  //       },
  //       receiver1_id: this.state.r_id1,
  //       receiver1_name: this.state.r_name1,
  //       receiver1_device: this.state.device_id1,
  //       receiver2_id: this.state.r_id2,
  //       receiver2_name: this.state.r_name2,
  //       receiver2_device: this.state.device_id2,
  //       receiver3_id: this.state.r_id3,
  //       receiver3_name: this.state.r_name3,
  //       receiver3_device: this.state.device_id3,
  //       status: 'active',
  //     }),
  //   })
  //     .then(alert('data stored'))
  //     .catch(error => alert(error));
  // };

  newdatastore = async () => {
    await fetch('http://192.168.1.100:1000/api/auth', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': this.state.token,
      },
    })
      .then(res => res.json())
      .then(resjson => {
        // alert(resjson);
        this.setState({
          data: JSON.stringify(resjson),
          s_id: resjson._id,
          s_name: resjson.name,
          email: resjson.email,
          s_device_id: resjson.device_id,
          s_latitude: resjson.location.latitude,
          s_longitude: resjson.location.longitude,
        });
        // alert(this.state.s_id + this.state.s_name);
      })

      .catch(error => alert(error));

    await this.getNearbyUser();
    //await alert(this.state.user_array);
    await fetch('http://192.168.1.100:1000/api/User_emergency', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender_id: this.state.s_id,
        sender_name: this.state.s_name,
        sender_location: {
          latitude: this.state.s_latitude,
          longitude: this.state.s_longitude,
        },
        receiver_id: this.state.r_id1,
        receiver_name: this.state.r_name1,
        receiver_device: this.state.device_id1,
        date: this.state.date,
        time: this.state.time,
        emergencytype: this.state.value,
      }),
    })
      .then(
        fetch('http://192.168.1.100:1000/api/User_emergency', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender_id: this.state.s_id,
            sender_name: this.state.s_name,
            sender_location: {
              latitude: this.state.s_latitude,
              longitude: this.state.s_longitude,
            },
            receiver_id: this.state.r_id2,
            receiver_name: this.state.r_name2,
            receiver_device: this.state.device_id2,
            date: this.state.date,
            time: this.state.time,
            emergencytype: this.state.value,
          }),
        }).then(
          fetch('http://192.168.1.100:1000/api/User_emergency', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sender_id: this.state.s_id,
              sender_name: this.state.s_name,
              sender_location: {
                latitude: this.state.s_latitude,
                longitude: this.state.s_longitude,
              },
              receiver_id: this.state.r_id3,
              receiver_name: this.state.r_name3,
              receiver_device: this.state.device_id3,
              date: this.state.date,
              time: this.state.time,
              emergencytype: this.state.value,
            }),
          }),
        ),
      )
      .catch(error => alert(error));
  };

  render() {
    console.log(this.state.u_latitude);
    console.log(this.state.u_longitude);
    const LATITUDE = 31.7079085;
    const LONGITUDE = 72.9857317;
    const LATITUDE_DELTA = 0.0043;
    const LONGITUDE_DELTA = 0.0034;

    return (
      <Animated.View style={styles.container}>
        {!!this.state.u_latitude && !!this.state.u_longitude && (
          <MapView
            // showsUserLocation
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: this.state.u_latitude,
              longitude: this.state.u_longitude,
              latitudeDelta: 0.021,
              longitudeDelta: 0.017,
            }}>
            {!!this.state.u_latitude && !!this.state.u_longitude && (
              <MapView.Marker
                coordinate={{
                  latitude: this.state.u_latitude,
                  longitude: this.state.u_longitude,
                }}
                title={'Your Location'}
              />
            )}

            {!!this.state.user1_location.lat &&
              !!this.state.user1_location.long && (
                <MapView.Marker
                  coordinate={{
                    latitude: this.state.user1_location.lat,
                    longitude: this.state.user1_location.long,
                  }}
                  title={'Nearby User'}
                  pinColor={'blue'}
                />
              )}
            {!!this.state.user2_location.lat &&
              !!this.state.user2_location.long && (
                <MapView.Marker
                  coordinate={{
                    latitude: this.state.user2_location.lat,
                    longitude: this.state.user2_location.long,
                  }}
                  title={'Nearby User'}
                  pinColor={'blue'}
                />
              )}
            {/* {!!this.state.user3_location.lat && !!this.state.user3_location.long && (
            <MapView.Marker
              coordinate={{
                latitude: this.state.user3_location.lat,
                longitude: this.state.user3_location.long,
              }}
              title={'Nearby User'}
              pinColor={'blue'}
            />
          )} */}
          </MapView>
        )}
        {/* <View style={{marginTop: 5, marginLeft: 200}}>
          <Button title="Request History" />
        </View> */}
        <View
          style={{
            width: 300,
            height: 50,
            marginTop: 10,
            backgroundColor: '#dcdcdc',
          }}>
          <Picker
            style={{color: 'black', borderColor: 'black'}}
            selectedValue={this.state.value}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({value: itemValue})
            }>
            <Picker.Item
              label="Select Emergency Request Type"
              color="white"
              justifyContent="center"
              value=""
              backgroundColor="gray"
            />

            <Picker.Item label="General" value="General" />
            <Picker.Item label="Road Accident" value="Road Accident" />
            <Picker.Item label="Emergency At Home" value="Emergency At Home" />
          </Picker>
        </View>
        <View style={{marginTop: 380}}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.sendrequest()}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              Send Emergency Request
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Requesthistory')}
            //  onPress={() => alert('Request Canceled')}
          >
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              Request History
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 50,
  },

  button: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 350,
    height: 50,
    marginTop: 4,
    justifyContent: 'center',
  },
  button1: {
    backgroundColor: '#B12F31',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 350,
    height: 50,
    marginTop: 4,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
  },
});
