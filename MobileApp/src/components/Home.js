import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  AsyncStorage,
  Image,
  ScrollView,
} from 'react-native';
import {Platform, PermissionsAndroid} from 'react-native';

import Navbar from './Navbar';
import {Actions} from 'react-native-router-flux';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';
import PushNotification from 'react-native-push-notification';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      FCMToken: '',
      token: null,
      error: null,
      device_id: '',
      date: '',
      latitude: 0,
      longitude: 0,
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
    };
  }
  //////////////////////USER LOCATION///////////////

  /////////////////////USER LOCATION END /////////////////

  /////////////////// Emergency Request Code /////////////////////////////

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

  getNearbyUser = async () => {
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
  };

  sendrequest = async () => {
    await this.getNearbyUser();

    const FIREBASE_API_KEY =
      'AAAAA_O6rIE:APA91bHcBiXfEB7kCjym_S_KDUnPa9h24PJy8s08pq83OZLlUBCIkc9h_CoK-VxrK2xq-ApCeiFHpa3ISMQFS61aQqL8Tid4lUFvFKaM51y87yYs4pRvakSQ0Os3IQQPU0VSS9IQxi9J';
    //alert(this.state.user_array);
    const message = {
      registration_ids: [
        //'fL4Yyju0Ih8:APA91bELRfC_0BVq11RlfhKdlCC9a-PyV72C0vCKsrXB2UIbkVwGxWYGcNZjZa8I0PGKmruh8UYqVscD0O1CnVuffBD8xQGCClLu0VnQyeqS5d4k9Fa81Gfqci20YmZ4IOo0BUH16aDA',
        // this.state.device_id,
        // this.state.device_id1,
        // this.state.device_id2,
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
        emergencytype: 'General',
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
            emergencytype: 'General',
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
              emergencytype: 'General',
            }),
          }),
        ),
      )
      .catch(error => alert(error));
  };

  ////////////////Emergency Request Code End /////////////////////////////

  getToken = async () => {
    try {
      let token = await AsyncStorage.getItem('token');
      this.setState({
        token: token.toString().substring(1, token.length - 1),
      });
      // alert(this.state.token);
    } catch (error) {
      alert(error);
    }
  };
  savingdeviceid = async () => {
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
          u_latitude: JSON.stringify(ulatitude),
          u_longitude: JSON.stringify(ulongitude),
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

    let token = AsyncStorage.getItem('token');
    this.setState({
      token: token.toString().substring(1, token.length - 1),
    });

    firebase
      .messaging()
      .getToken()
      .then(FCM => {
        this.setState({
          FCMToken: FCM,
        });
        //  alert(this.state.FCMToken);
        console.log(this.state.FCMToken);

        fetch('http://192.168.1.100:1000/api/Device_id', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',

            'x-auth-token': this.state.token,
          },
          body: JSON.stringify({
            device_id: this.state.FCMToken,
          }),
        }).catch(error => alert(error));

        AsyncStorage.setItem('device_id', this.state.FCMToken);
      });
  };

  componentDidMount = async () => {
    await this.getToken();
    await this.savingdeviceid();
    await this.saveUserLocation();
  };

  saveUserLocation = async () => {
    await fetch('http://192.168.1.100:1000/api/Userlocation', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

        'x-auth-token': this.state.token,
      },
      body: JSON.stringify({
        location: {
          latitude: this.state.u_latitude,
          longitude: this.state.u_longitude,
        },
      }),
    }).catch(error => alert(error));
    AsyncStorage.setItem('userlocation_latitude', this.state.u_latitude);
    AsyncStorage.setItem('userlocation_longitude', this.state.u_longitude);

    console.log('userlocation saved');
  };
  // componentDidMount = async () => {
  //   await this.getToken();
  //   await this.getuserLocation();
  //   await this.savingdeviceid();
  // };
  userLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      alert('Logout Success!');
      Actions.login();
    } catch (error) {
      alert('AsyncStorage error: ' + error.message);
    }
  };

  render() {
    const navigation = this.props;
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <TouchableOpacity
                onPress={() => this.sendrequest()}
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: '#dcdcdc',
                  borderRadius: 50,
                  borderWidth: 6,
                  borderColor: '#B12F31',
                  marginLeft: 220,
                  marginTop: 10,
                }}>
                <Image
                  style={{marginLeft: 10, height: 70, width: 70}}
                  source={require('../images/emer.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginBottom: 40}}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                Recommended
              </Text>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Highemergency')}>
                <View style={styles.textview}>
                  <View style={{marginLeft: 15}}>
                    <View style={{marginBottom: 3}}>
                      <Text
                        style={{
                          color: '#B12F31',
                          fontSize: 30,
                          fontWeight: 'bold',
                        }}>
                        EMERGENCY REQUEST
                      </Text>
                      <Text style={{color: '#B12F31', fontSize: 16}}>
                        Send emergency request to nearby users......!
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                      <Text
                        style={{
                          color: '#B12F31',
                          fontWeight: 'bold',
                          justifyContent: 'center',
                          alignSelf: 'center',
                        }}>
                        Request
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                Try Our Amazing Featues....!
              </Text>
              <View>
                <View style={{flexDirection: 'row', marginBottom: 22}}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Travel')}>
                    <View
                      style={{flexDirection: 'column', alignItems: 'center'}}>
                      <View style={styles.textviewb}>
                        <Image
                          source={require('../images/aa.png')}
                          style={{width: 90, height: 80, alignSelf: 'center'}}
                        />
                      </View>
                      <View style={{flexDirection: 'column'}}>
                        <TouchableOpacity>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 20,
                              fontWeight: 'bold',
                              marginBottom: 1,
                            }}>
                            Travel Guide
                          </Text>
                          <Text style={{color: 'black', fontSize: 12}}>
                            Tap Here To Discover More..
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Firstaid')}>
                    <View
                      style={{flexDirection: 'column', alignItems: 'center'}}>
                      <View style={styles.textviewb}>
                        <Image
                          source={require('../images/aaa.png')}
                          style={{width: 90, height: 80, alignSelf: 'center'}}
                        />
                      </View>
                      <View style={{flexDirection: 'column'}}>
                        <TouchableOpacity>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 20,
                              fontWeight: 'bold',
                              marginBottom: 1,
                            }}>
                            First Aid
                          </Text>
                          <Text style={{color: 'black', fontSize: 12}}>
                            Tap Here To Discover More..
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Dietplan')}>
                    <View
                      style={{flexDirection: 'column', alignItems: 'center'}}>
                      <View style={styles.textviewb}>
                        <Image
                          source={require('../images/food.png')}
                          style={{width: 90, height: 80, alignSelf: 'center'}}
                        />
                      </View>
                      <View style={{flexDirection: 'column'}}>
                        <TouchableOpacity>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 20,
                              fontWeight: 'bold',
                              marginBottom: 1,
                            }}>
                            Diet Plans
                          </Text>
                          <Text style={{color: 'black', fontSize: 12}}>
                            Tap Here To Discover More..
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Exercises')}>
                    <View
                      style={{flexDirection: 'column', alignItems: 'center'}}>
                      <View style={styles.textviewb}>
                        <Image
                          source={require('../images/barbell.png')}
                          style={{width: 70, height: 70, alignSelf: 'center'}}
                        />
                      </View>
                      <View style={{flexDirection: 'column'}}>
                        <TouchableOpacity>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 20,
                              fontWeight: 'bold',
                              marginBottom: 1,
                            }}>
                            Exercises
                          </Text>
                          <Text style={{color: 'black', fontSize: 12}}>
                            Tap Here To Discover More..
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate(
                        'CurrentTrendsAndAnalytics',
                      )
                    }>
                    <View
                      style={{flexDirection: 'column', alignItems: 'center'}}>
                      <View style={styles.textviewc}>
                        <Image
                          source={require('../images/trend.png')}
                          style={{width: 100, height: 100, alignSelf: 'center'}}
                        />
                      </View>
                      <View style={{flexDirection: 'column'}}>
                        <TouchableOpacity
                          style={{justifyContent: 'flex-start'}}>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 20,
                              fontWeight: 'bold',
                              marginBottom: 1,
                            }}>
                            Current Trends & Analytics
                          </Text>
                          <Text style={{color: 'black', fontSize: 12}}>
                            Tap Here To Discover More..
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{height: 100}} />
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',

              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
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
              }}
              onPress={() => this.props.navigation.navigate('Notification')}>
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
              }}
              onPress={() => this.props.navigation.navigate('UserProfile')}
              // onPress={() => this.props.navigation.navigate('Notification')}
            >
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
  footer: {
    position: 'absolute',
    backgroundColor: '#B12F31',
    // borderRadius: 3,
    // borderWidth: 1,

    width: 360,
    height: 60,
    marginTop: 506,

    //justifyContent: 'flex-end',
  },
  heading: {
    flex: 0.7,
    fontSize: 40,
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
    marginLeft: 200,
  },
  textview: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 350,
    height: 140,
    marginTop: 7,
    marginBottom: 10,
    justifyContent: 'center',
  },
  textviewb: {
    backgroundColor: '#dcdcdc',
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
  textviewc: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 335,
    height: 120,
    marginTop: 7,
    marginBottom: 7,
    marginHorizontal: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
});
