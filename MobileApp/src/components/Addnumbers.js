import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Addnumbers extends Component {
  state = {
    emergencyno: [],
    no1: '',
    no2: '',
    no3: '',
    no4: '',
    no5: '',
    token: null,
  };
  setNumber1 = val => {
    this.setState({
      emergencyno: val,
    });
  };
  setNumber2 = val => {
    this.setState({
      emergencyno: val,
    });
  };
  setNumber3 = val => {
    this.setState({
      emergencyno: val,
    });
  };
  setNumber4 = val => {
    this.setState({
      emergencyno: val,
    });
  };
  setNumber5 = val => {
    this.setState({
      emergencyno: val,
    });
  };

  setNumber = val => {
    this.setState({
      emergencyno: val,
    });
  };

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

  componentDidMount = async () => {
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
          //emergencyno: JSON.stringify(resjson),
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

  onAddno = async () => {
    try {
      await fetch('http://192.168.137.1:1000/api/Emergencyno', {
        method: 'POST',

        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': this.state.token,
        },
        body: JSON.stringify({
          emergencyno: this.state.emergencyno,
          // emergencyno: this.state.emergencyno
        }),
      })
        .then(alert('Number Added Successfully'))
        .catch(error => alert(error));
    } catch (error) {
      console.log(error);
    }
    // this.state.emergencyno.map(item => {});
    alert(this.state.emergencyno);
  };
  async componentDidMount() {
    await this.getToken();
    // await this.onAddno();
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.heading}>Add Emergency Contact Numbers</Text> */}
        <View
          style={{
            backgroundColor: '#dcdcdc',
            width: 330,
            height: 530,
            marginTop: 15,
          }}>
          <View style={{height: 10}} />
          <TextInput
            style={styles.inputfield}
            placeholder="Name 1"
            placeholderTextColor="#601622"
            value={this.state.name1}
            onChangeText={this.setName}
          />
          <TextInput
            style={styles.inputfield}
            placeholder="Emergency Number 1"
            placeholderTextColor="#601622"
            value={this.state.num1}
            onChangeText={this.setNumber}
          />
          <TextInput
            style={styles.inputfield}
            placeholder="Name 2"
            placeholderTextColor="#601622"
            value={this.state.name2}
            onChangeText={this.setName}
          />
          <TextInput
            style={styles.inputfield}
            placeholder="Emergency Number 2"
            placeholderTextColor="#601622"
            value={this.state.num2}
            onChangeText={this.setNumber}
          />
          <TextInput
            style={styles.inputfield}
            placeholder="Name 3"
            placeholderTextColor="#601622"
            value={this.state.name3}
            onChangeText={this.setName}
          />
          <TextInput
            style={styles.inputfield}
            placeholder="Emergency Number 3"
            placeholderTextColor="#601622"
            value={this.state.num3}
            onChangeText={this.setNumber}
          />
          <TextInput
            style={styles.inputfield}
            placeholder="Name 4"
            placeholderTextColor="#601622"
            value={this.state.emergencyname}
            onChangeText={this.setName}
          />
          <TextInput
            style={styles.inputfield}
            placeholder="Emergency Number 4"
            placeholderTextColor="#601622"
            value={this.state.emergencyno}
            onChangeText={this.setNumber}
          />
          <TextInput
            style={styles.inputfield}
            placeholder="Name 5"
            placeholderTextColor="#601622"
            value={this.state.emergencyname}
            onChangeText={this.setName}
          />
          <TextInput
            style={styles.inputfield}
            placeholder="Emergency Number 5"
            placeholderTextColor="#601622"
            value={this.state.emergencyno}
            onChangeText={this.setNumber}
          />
          <TouchableOpacity
            style={styles.button}
            width="300"
            onPress={() => {
              this.onAddno();
            }}>
            <Text style={styles.buttonText}>Save</Text>
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

    alignItems: 'center',
  },
  inputfield: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 7,
    width: 250,
    height: 37,
    alignSelf: 'center',
  },
  heading: {
    color: '#ffffff',
    fontSize: 20,
  },
  button: {
    width: 250,
    backgroundColor: '#B12F31',
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});
