import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  AsyncStorage,
  FlatList,
  ScrollView,
} from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
//import Navbar from './Navbar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Notificationdetail from './notificationdetail';
export default class Requestshistory extends Component {
  constructor(props) {
    //constructor to set default state
    super(props);
    this.state = {
      sender_name: '',
      sender_location: [],
      date: '',
      time: '',
      type: '',
    };
  }

  getuserdata = async () => {
    let token = await AsyncStorage.getItem('token');
    this.setState({
      token: token.toString().substring(1, token.length - 1),
    });
    // alert(this.state.token);
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
          user_id: resjson._id,
          user_name: resjson.name,
          user_email: resjson.email,
          user_device_id: resjson.device_id,
          // user_latitude: resjson.location.latitude,
          // user_longitude: resjson.location.longitude,
        });
        // alert(this.state.user_id + this.state.user_name);
      })

      .catch(error => alert(error));
    let s_name = this.state.user_name;
    console.log(s_name);
    await fetch('http://192.168.1.100:1000/api/User_emergency/a/' + s_name, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(resjson => {
        this.setState({
          res: resjson,
          a: JSON.stringify(resjson),
        });
        // alert(this.state.a);
      })

      .catch(error => alert(error));
    //alert(this.state.a);
  };

  componentDidMount = async () => {
    await this.getuserdata();
  };
  renderItem = item => {
    return (
      <View
        style={{
          backgroundColor: '#dcdcdc',
          width: 330,
          height: 100,
          padding: 5,
          margin: 5,
          alignSelf: 'center',
          borderRadius: 5,
          borderRadiusColor: 'black',
        }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('notificationdetail', {
              sender_name: item.sender_name,
              sender_location_latitude: item.sender_location.latitude,
              sender_location_longitude: item.sender_location.longitude,

              date: item.date,
              time: item.time,
              emergencytype: item.emergencytype,
            });
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, marginRight: 5}}> Receiver Name:</Text>
            <Text style={{fontSize: 12, color: '#B12F31'}}>
              {item.receiver_name}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, marginRight: 5}}>Sender Location:</Text>
            <Text style={{fontSize: 12, color: '#B12F31'}}>
              {item.sender_location.latitude},{item.sender_location.longitude}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 12, marginRight: 5}}> Date :</Text>
              <Text style={{fontSize: 12, color: '#B12F31'}}>{item.date}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 12, marginRight: 5, marginLeft: 20}}>
                Time :
              </Text>
              <Text style={{fontSize: 12, color: '#B12F31'}}>{item.time}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, marginRight: 5}}> Emergency Type:</Text>
            <Text style={{fontSize: 12, color: '#B12F31'}}>
              {item.emergencytype}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 30,
            width: 70,
            backgroundColor: '#B12F31',
            alignSelf: 'center',

            marginLeft: 200,
            marginBottom: 5,
          }}>
          <Text style={{color: 'white', alignSelf: 'center', marginTop: 5}}>
            CANCEL
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <ScrollView>
          <View>
            <FlatList
              data={this.state.res}
              renderItem={({item}) => this.renderItem(item)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
