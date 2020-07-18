import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Button,
  Picker,
  ScrollView,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Dietplan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      activity: '',
      height: null,
      weight: null,
      age: null,
      goal: '',
      diet_plan: [],
    };
  }
  setheight = val => {
    this.setState({
      height: val,
    });
  };
  setweight = val => {
    this.setState({
      weight: val,
    });
  };
  setage = val => {
    this.setState({
      age: val,
    });
  };
  submit = () => {
    //  alert(this.state.goal);
    //alert(this.state.city+" "+this.state.days+" "+this.state.disease+" "+this.state.sensitive);
    fetch('http://192.168.1.100:1000/api/diet/get_calorie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        calorie: this.state.goal,
      }),
    })
      .then(res => res.json())
      .then(resjson => {
        this.setState({
          diet_plan: resjson,
        });
        //  alert(this.state.diet_plan);
      })
      .catch(err => alert(err));
  };

  getplan = async () => {
    return fetch('http://192.168.1.100:1000/api/diet', {
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

          // name: JSON.stringify(resjson[0].name),
          // category: JSON.stringify(resjson[0].category),
          // instructions: JSON.stringify(resjson[0].instructions),
          // img: JSON.stringify(resjson[0].img)
        });
        alert(this.state.res);
      })

      .catch(error => alert(error));
  };

  calbmi = () => {
    var conv = this.state.height / 3.28;
    let result = this.state.weight / (conv * conv);
    //alert(result);
    var suggest;

    if (result < 18.5) {
      suggest = 'You are Under weight,we suggest you to gain weight.';
    } else if (result < 24.9) {
      suggest =
        'You have Normal weight, we suggest you to not Gain/lose weight.';
    } else if (result < 29.9) {
      suggest = 'You are Over weight, we suggest you to lose weight';
    } else if (result > 30) {
      suggest =
        'You are highly overweight, you need to lose weight with immediate effect.';
    }

    this.setState({
      bmi: result,
      sugg: suggest,
      //      recommendation: alldata.express[1]
    });
    // alert(this.state.sugg);
  };
  calintake = () => {
    let ft2cm = this.state.height * 30.48;
    //var bmr;
    var s;
    if (this.state.gender == 'female') {
      var s = -161;
    } else {
      var s = 5;
    }

    let bmr = 10 * this.state.weight + 6.25 * ft2cm - 5 * this.state.age + s;

    var a = 0;

    if (this.state.activity == 'sedentary') {
      var a = 1.2;
    } else if (this.state.activity == 'light') {
      var a = 1.375;
    } else if (this.state.activity == 'active') {
      var a = 1.55;
    } else if (this.state.activity == 'vactive') {
      var a = 1.725;
    } else if (this.state.activity == 'eactive') {
      var a = 1.9;
    }
    // alert(a);
    let asnn = bmr * a;
    var asn = Math.floor(asnn);
    var gainn = asn + 250;
    var lose = asn - 250;
    //alert(asn);
    this.setState({
      maintain: asn,
      gain: gainn,
      loose: lose,
      //      recommendation: alldata.express[1]
    });
    // alert(this.state.gain);
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/dieticon.png')}
                style={{
                  width: 80,
                  height: 80,
                  marginTop: 35,
                  marginLeft: 10,
                  marginRight: 19,
                }}
              />
              <View style={{marginTop: 20}}>
                <Text style={styles.heading}>Diet Plans</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/test.png')}
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#B12F31',
                  marginTop: 6,
                  marginBottom: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                Please Fill the Following Form
              </Text>
            </View>

            <View style={styles.textview1}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../images/height.png')}
                  style={{
                    width: 35,
                    height: 35,
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />
                <TextInput
                  style={styles.inputfield}
                  // placeholderTextColor="black"
                  placeholder="Enter Height (In Feets)"
                  value={this.state.height}
                  onChangeText={this.setheight}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../images/weight.png')}
                  style={{
                    width: 35,
                    height: 35,
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />
                <TextInput
                  style={styles.inputfield}
                  // placeholderTextColor="black"
                  placeholder="Enter Weight (In Kgs)"
                  value={this.state.weight}
                  onChangeText={this.setweight}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.calbmi()}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textview}>
              <View
                style={{
                  width: 280,
                  height: 70,
                  marginBottom: 20,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                }}>
                <Text>Your BMI VALUE IS {this.state.bmi}</Text>
                <Text> {this.state.sugg}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../images/adult.png')}
                  style={{
                    width: 35,
                    height: 45,
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />
                <TextInput
                  style={styles.inputfield}
                  placeholder="Enter Age Here"
                  value={this.state.age}
                  onChangeText={this.setage}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../images/gender.png')}
                  style={{
                    width: 35,
                    height: 35,
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />
                <Picker
                  style={styles.inputfield}
                  //placeholder="Select an Option"
                  selectedValue={this.state.gender}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({gender: itemValue})
                  }>
                  <Picker.Item label="Selct a gender" value="" />

                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                </Picker>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../images/barbell.png')}
                  style={{
                    width: 35,
                    height: 35,
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />
                <Picker
                  style={styles.inputfield}
                  // placeholder="Select an Option"
                  selectedValue={this.state.activity}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({activity: itemValue})
                  }>
                  <Picker.Item label="Select Activity Level " value="" />
                  <Picker.Item
                    label="Sedentary: Little or no exercise"
                    value="sedentary"
                  />
                  <Picker.Item
                    label="Light: Exercise 1-3 times/week"
                    value="light"
                  />
                  <Picker.Item
                    label="Active: Intense exercise 3-4 times/week"
                    value="active"
                  />
                  <Picker.Item
                    label="Very Active: Intense exercise 6-7 times/week"
                    value="vactive"
                  />
                  <Picker.Item
                    label="Extra Active: Very intense exercise daily"
                    value="eactive"
                  />
                </Picker>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.calintake()}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  Calorie Intake
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textview3}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#B12F31',
                  marginTop: 6,
                  marginBottom: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                Some suggested Diet Plans for you
              </Text>
              <View style={styles.textview2}>
                <Text
                  style={{color: 'black', fontSize: 16, alignSelf: 'center'}}>
                  To Loose Weight
                </Text>
                <Text
                  style={{color: 'black', fontSize: 16, alignSelf: 'center'}}>
                  You Need "{this.state.loose}" calories/day
                </Text>
                <Text
                  style={{color: 'black', fontSize: 16, alignSelf: 'center'}}>
                  Tap To View Diet Plan
                </Text>
              </View>
              <View style={styles.textview2}>
                <Text
                  style={{color: 'black', fontSize: 16, alignSelf: 'center'}}>
                  To Maintain Weight
                </Text>
                <Text
                  style={{color: 'black', fontSize: 16, alignSelf: 'center'}}>
                  You Need {this.state.maintain} calories/day
                </Text>
                <Text
                  style={{color: 'black', fontSize: 16, alignSelf: 'center'}}>
                  Tap To View Diet Plan
                </Text>
              </View>
              <View style={styles.textview2}>
                <Text
                  style={{color: 'black', fontSize: 16, alignSelf: 'center'}}>
                  To Gain weight
                </Text>
                <Text
                  style={{color: 'black', fontSize: 16, alignSelf: 'center'}}>
                  You Need {this.state.gain} calories/day
                </Text>
                <Text
                  style={{color: 'black', fontSize: 16, alignSelf: 'center'}}>
                  Tap To View Diet Plan
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../images/different.png')}
                  style={{
                    width: 35,
                    height: 35,
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />
                <Picker
                  style={styles.inputfield}
                  //placeholder="Select an Option"
                  selectedValue={this.state.goal}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({goal: itemValue})
                  }>
                  <Picker.Item label="Choose an option" value="" />

                  <Picker.Item
                    label="To loose Weight"
                    value={this.state.loose}
                  />
                  <Picker.Item
                    label="To Maintain Weight"
                    value={this.state.maintain}
                  />
                  <Picker.Item label="To Gain Weight" value={this.state.gain} />
                </Picker>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.submit()}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  Get Dietplan
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textview1}>
              <Text style={{fontSize: 18, color: '#B12F31'}}>Breakfast</Text>
              <Text style={{fontSize: 16}}>
                {this.state.diet_plan.breakfast}
              </Text>
              <Text style={{fontSize: 18, color: '#B12F31'}}>Lunch</Text>
              <Text style={{fontSize: 16}}> {this.state.diet_plan.lunch}</Text>
              <Text style={{fontSize: 18, color: '#B12F31'}}>Dinner</Text>
              <Text style={{fontSize: 16}}> {this.state.diet_plan.dinner}</Text>
              <Text style={{fontSize: 18, color: '#B12F31'}}>Snake</Text>
              <Text style={{fontSize: 16}}> {this.state.diet_plan.snack}</Text>
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
  heading: {
    flex: 0.7,
    fontSize: 30,
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
    backgroundColor: 'white',
    borderRadius: 5,
    //borderWidth: 1,
    // borderColor: 'black',
    width: 240,
    margin: 2,
    marginBottom: 10,
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
    backgroundColor: '#B12F31',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 130,
    height: 40,
    marginTop: 5,
    marginBottom: 19,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textview: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 330,
    height: 400,
    marginTop: 7,
    marginBottom: 10,
    justifyContent: 'center',
  },
  textview3: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 330,
    height: 450,
    marginTop: 7,
    marginBottom: 10,
    justifyContent: 'center',
  },
  textview2: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    height: 70,
    marginTop: 7,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  diseaseview: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 330,
    height: 170,
    marginTop: 7,
    marginBottom: 10,
    justifyContent: 'center',
  },
  textview1: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 330,
    height: 250,
    marginTop: 7,
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  footer: {
    position: 'absolute',
    backgroundColor: '#B12F31',

    width: 360,
    height: 60,
    marginTop: 506,
  },
});
