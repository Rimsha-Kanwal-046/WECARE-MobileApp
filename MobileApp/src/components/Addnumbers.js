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
      // alert(this.state.token);
    } catch (error) {
      alert(error);
    }
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
        <Text style={styles.heading}>Add Emergency Contact Numbers</Text>
        <TextInput
          style={styles.inputfield}
          placeholder="Emergency Number 1"
          placeholderTextColor="#601622"
          value={this.state.emergencyno}
          onChangeText={this.setNumber}
        />
        <TextInput
          style={styles.inputfield}
          placeholder="Emergency Number 2"
          placeholderTextColor="#601622"
          value={this.state.emergencyno}
          onChangeText={this.setNumber}
        />
        <TextInput
          style={styles.inputfield}
          placeholder="Emergency Number 3"
          placeholderTextColor="#601622"
          value={this.state.emergencyno}
          onChangeText={this.setNumber}
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
        <TouchableOpacity
          style={styles.button}
          width="300"
          onPress={() => this.props.navigation.navigate('Emergencyno')}>
          <Text style={styles.buttonText}>Display Contacts</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#B12F31',
    alignItems: 'center',
  },
  inputfield: {
    width: 300,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    fontSize: 16,
    //color: '#601622',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  heading: {
    color: '#ffffff',
    fontSize: 20,
  },
  button: {
    width: 300,
    backgroundColor: '#601622',

    borderRadius: 100,
    marginVertical: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});
