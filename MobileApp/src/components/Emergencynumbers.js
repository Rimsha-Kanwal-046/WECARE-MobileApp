import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
} from 'react-native';
import {Platform, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

//import SendSMS from 'react-native-sms-x';
//import MessageCompose from 'react-native-message-compose';

//import Geolocation from '@react-native-community/geolocation';
import {Actions} from 'react-native-router-flux';

import {Linking} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Communications from 'react-native-communications';

export default class EmergencyNumbers extends Component {
  state = {
    emergencyno: [],

    token: null,
    message: '',
    number: '',
    latitude: '',
    longitude: '',
    currentLatitude: '',
    currentLongitude: '',
  };
  setnumber = val => {
    this.setState({
      number: val,
    });
  };
  componentDidMount = async () => {
    this.getNumbers();
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
          latitude: ulatitude,
          longitude: ulongitude,
        });
        console.log(this.state.latitude);
        console.log(this.state.longitude);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  // componentDidMount = () => {
  //   navigator.geolocation.getCurrentPosition(info => console.log(info));
  // };
  getToken = async () => {
    try {
      let token = await AsyncStorage.getItem('token');
      this.setState({
        token: token.toString().substring(1, token.length - 1),
      });
      //alert(this.state.token);
    } catch (error) {
      alert(error);
    }
  };

  getNumbers = async () => {
    await this.getToken();
    //const token = await AsyncStorage.getItem('token');
    fetch('http://192.168.1.100:1000/api/Emergencyno', {
      method: 'GET',

      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': this.state.token,
      },
    })
      .then(res => res.json())
      .then(resjson => {
        this.setState({
          emergencyno: JSON.stringify(resjson),
          name1: resjson.name1,
          num1: resjson.num1,
          name2: resjson.name2,
          num2: resjson.num2,
          name3: resjson.name3,
          num3: resjson.num3,
          name4: resjson.name4,
          num4: resjson.num4,
          name5: resjson.name5,
          num5: resjson.num5,
        });
        // alert(this.state.emergencyno);

        // alert(this.state.num1);
      })

      .catch(error => alert(error));
  };

  n1 = () => {
    Communications.phonecall(this.state.num1, true);
  };
  n2 = () => {
    Communications.phonecall(this.state.num2, true);
  };
  n3 = () => {
    Communications.phonecall(this.state.num3, true);
  };
  n4 = () => {
    Communications.phonecall(this.state.num4, true);
  };

  n5 = () => {
    Communications.phonecall(this.state.num4, true);
  };

  no1 = () => {
    Communications.text(
      this.state.num1,
      'Hey your friend needs your help at location : ' +
        '  "https://www.google.com/maps?q=' +
        this.state.latitude +
        ',' +
        this.state.longitude +
        'Try to reach there as soon as possible\n                    Automated message by WECARE',
    );
  };
  a;
  no2 = () => {
    Communications.text(
      this.state.num2,
      'Hey your friend needs your help at location : ' +
        '  "https://www.google.com/maps?q=' +
        this.state.latitude +
        ',' +
        this.state.longitude +
        'Try to reach there as soon as possible\n                    Automated message by WECARE',
    );
  };
  no3 = () => {
    Communications.text(
      this.state.num3,
      'Hey your friend needs your help at location : ' +
        '  "https://www.google.com/maps?q=' +
        this.state.latitude +
        ',' +
        this.state.longitude +
        'Try to reach there as soon as possible\n                    Automated message by WECARE',
    );
  };
  no4 = () => {
    Communications.text(this.state.num4);
  };
  no5 = () => {
    Communications.text(this.state.num5);
  };
  // getlocation = async () => {
  //   await Geolocation.getCurrentPosition(
  //     position => {
  //       console.log(position);
  //     },
  //     error => {
  //       // See error code charts below.
  //       console.log(error.code, error.message);
  //     },
  //     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //   );
  // };

  async componentDidMount() {
    await this.getToken();
    await this.getNumbers();
    // await this.getlocation();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 30}} />
        {/* <Text style={styles.heading}>Emergency Contacts</Text> */}
        <View style={{alignSelf: 'center'}}>
          <View style={styles.textview}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/contacts.png')}
                style={{
                  width: 35,
                  height: 40,
                  marginRight: 15,
                  marginLeft: 5,
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  {this.state.name1}
                </Text>
                <Text style={{color: 'black', fontSize: 16}}>
                  {this.state.num1}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity onPress={() => this.n1()}>
                  <Image
                    source={require('../images/call.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 60,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.no1()}>
                  <Image
                    source={require('../images/msg.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.textview}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/contacts.png')}
                style={{
                  width: 35,
                  height: 40,
                  marginRight: 15,
                  marginLeft: 5,
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  {this.state.name2}
                </Text>
                <Text style={{color: 'black', fontSize: 16}}>
                  {this.state.num2}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity onPress={() => this.n2()}>
                  <Image
                    source={require('../images/call.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 60,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.no1()}>
                  <Image
                    source={require('../images/msg.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.textview}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/contacts.png')}
                style={{
                  width: 35,
                  height: 40,
                  marginRight: 15,
                  marginLeft: 5,
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  {this.state.name3}
                </Text>
                <Text style={{color: 'black', fontSize: 16}}>
                  {this.state.num3}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity onPress={() => this.n3()}>
                  <Image
                    source={require('../images/call.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 60,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.no3()}>
                  <Image
                    source={require('../images/msg.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.textview}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/contacts.png')}
                style={{
                  width: 35,
                  height: 40,
                  marginRight: 15,
                  marginLeft: 5,
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  {this.state.name4}
                </Text>
                <Text style={{color: 'black', fontSize: 16}}>
                  {this.state.num4}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity onPress={() => this.n4()}>
                  <Image
                    source={require('../images/call.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 60,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.no4()}>
                  <Image
                    source={require('../images/msg.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.textview}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/contacts.png')}
                style={{
                  width: 35,
                  height: 40,
                  marginRight: 15,
                  marginLeft: 5,
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  {this.state.name5}
                </Text>
                <Text style={{color: 'black', fontSize: 16}}>
                  {this.state.num5}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity onPress={() => this.n5()}>
                  <Image
                    source={require('../images/call.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 60,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.no5()}>
                  <Image
                    source={require('../images/msg.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('Addnumbers')}>
          <Text
            style={{color: 'white', fontWeight: 'bold', alignSelf: 'center'}}>
            Add/Edit Numbers
          </Text>
        </TouchableOpacity>
        <View style={styles.textviewb}>
          <TextInput
            style={styles.textinput}
            placeholder="Enter a number"
            placeholderTextColor="gray"
            type="number"
            value={this.state.number}
            onChangeText={this.setnumber}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              Communications.text(
                this.state.number,
                'Hey your friend needs your help at location : ' +
                  '  "https://www.google.com/maps?q=' +
                  this.state.latitude +
                  ',' +
                  this.state.longitude +
                  'Try to reach there as soon as possible\n                    Automated message by WECARE',
              )
            }>
            <Text style={{color: 'white', alignSelf: 'center'}}>
              Send Message
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
    width: 340,
    height: 50,
    justifyContent: 'center',
    marginBottom: 2,
    justifyContent: 'center',
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
