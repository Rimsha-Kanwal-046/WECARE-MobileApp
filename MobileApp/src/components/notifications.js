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
import Navbar from './Navbar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Notificationdetail from './notificationdetail';
export default class notifications extends Component {
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

  // getalldata = async () => {
  //   await fetch('http://192.168.1.3:1000/api/User_emergency', {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(resjson => {
  //       this.setState({
  //         res: resjson,
  //         a: JSON.stringify(resjson),
  //       });
  //       // alert(this.state.res);
  //     })

  //     .catch(error => alert(error));
  // };

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
    let name = this.state.user_name;
    console.log(name);
    await fetch('http://192.168.1.100:1000/api/User_emergency/' + name, {
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
  };
  // data = async () => {
  //   // e.preventDefault();

  //   let sender_name = 'aleena';
  //   await fetch('http://192.168.1.3:1000/api/User_emergency/' + sender_name)
  //     .then(response => response.json())
  //     .then(data => this.setState({emergency: data, aa: JSON.stringify(data)}));
  //   //alert(this.state.aa);
  // };
  componentDidMount = async () => {
    await this.getuserdata();
    // await this.getalldata();
    // await this.renderItem();
  };
  renderItem = item => {
    return (
      <View
        style={{
          backgroundColor: '#dcdcdc',
          width: 330,
          height: 70,
          padding: 5,
          margin: 5,
          alignSelf: 'center',
          borderRadius: 5,
          borderRadiusColor: 'black',
        }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('notificationdetail', {
              name: 'nimra',
              otherParam: 'anything you want here',
              sender_name: item.sender_name,
              sender_location_latitude: item.sender_location.latitude,
              sender_location_longitude: item.sender_location.longitude,

              date: item.date,
              time: item.time,
              emergencytype: item.emergencytype,
            });
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, marginRight: 5}}> Sender Name:</Text>
            <Text style={{fontSize: 12, color: '#B12F31'}}>
              {item.sender_name}
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
