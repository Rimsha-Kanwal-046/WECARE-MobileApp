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
import Navbar from './Navbar';
import {Actions} from 'react-native-router-flux';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';

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
    };
  }

  getuserLocation = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        this.saveUserLocation();
      },
      error => this.setState({error: error.message}),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    //alert(this.state.latitude + ' ' + this.state.longitude);
  };

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
  savingdeviceid = () => {
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

        fetch('http://192.168.1.3:1000/api/Device_id', {
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
  };

  saveUserLocation = async () => {
    await fetch('http://192.168.1.3:1000/api/Userlocation', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

        'x-auth-token': this.state.token,
      },
      body: JSON.stringify({
        location: {
          latitude: this.state.latitude,
          longitude: this.state.longitude,
        },
      }),
    }).catch(error => alert(error));
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
            <Button
              title="Notification"
              onPress={() => this.props.navigation.navigate('Notification')}
            />
            {/* <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../images/logo.png')}
              style={{width: 80, height: 50, alignSelf: 'center'}}
            />
            <Text style={styles.heading}>WE CARE </Text>
          </View> */}
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
                    <Image
                      style={{marginLeft: 200, height: 70, width: 100}}
                      source={require('../images/emer.png')}
                    />
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
              </View>
              <View style={{height: 100}} />
            </View>
          </View>
        </ScrollView>

        <Navbar />
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
  },
  textview: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 350,
    height: 180,
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
});
