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
export default class notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: '',
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
    await fetch('http://192.168.1.3:1000/api/auth', {
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
          user_latitude: resjson.location.latitude,
          user_longitude: resjson.location.longitude,
        });
        // alert(this.state.user_id + this.state.user_name);
      })

      .catch(error => alert(error));
    let name = this.state.user_name;
    await fetch('http://192.168.1.3:1000/api/User_emergency', {
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
        alert(this.state.a);
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
      <View>
        <Text>Sender Name= {item.sender_name}</Text>
        <Text>
          Sender_Location :{item.sender_location.latitude},
          {item.sender_location.longitude}
        </Text>
        <Text>
          /////////////////////////////////////////////////////////////////////
        </Text>
      </View>
    );
  };
  render() {
    const navigation = this.props;
    return (
      <View>
        <ScrollView>
          <View>
            <Text> Notifications </Text>
            <FlatList
              data={this.state.res}
              renderItem={({item}) => this.renderItem(item)}
            />
            <Button title="press" onPress={() => this.getuserdata()} />
          </View>
        </ScrollView>
        <Navbar navigation={navigation} />
      </View>
    );
  }
}
