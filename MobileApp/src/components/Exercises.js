import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  AsyncStorage,
  Picker,
  Image,
  ScrollView,
  TouchableOpacityComponent,
  ImageBackground,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Geolocation from 'react-native-geolocation-service';

export default class Exercises extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{marginBottom: 40, marginTop: 30}}>
            <Text style={{color: 'black', fontSize: 26, fontWeight: 'bold'}}>
              Recommended
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Fullbody')}>
              <View style={styles.textview}>
                <ImageBackground
                  source={require('../images/exercises/a.jpg')}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 400 / 2,
                  }}>
                  <View style={{marginLeft: 185, marginTop: 20}}>
                    <View style={{marginBottom: 10}}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 30,
                          fontWeight: 'bold',
                        }}>
                        Full Body
                      </Text>
                      <Text style={{color: 'black', fontSize: 16}}>
                        Get Started Now......!
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
                        Start
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View />
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 24,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Categories
            </Text>
            <View>
              <View style={{flexDirection: 'row', marginBottom: 22}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Upperbody')}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View style={styles.textviewb}>
                      <Image
                        source={require('../images/exercises/upper.jpg')}
                        style={{
                          width: 140,
                          height: 140,
                          borderRadius: 400 / 2,
                          alignSelf: 'center',
                        }}
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
                          Upper Body
                        </Text>
                        <Text style={{color: 'black', fontSize: 12}}>
                          Tap Here To Discover More..
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Lowerbody')}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View style={styles.textviewb}>
                      <Image
                        source={require('../images/exercises/lower.jpg')}
                        style={{
                          width: 140,
                          height: 140,
                          borderRadius: 500,
                          alignSelf: 'center',
                        }}
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
                          Lower Body
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
                    this.props.navigation.navigate('Absexercises')
                  }>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View style={styles.textviewb}>
                      <Image
                        source={require('../images/abs.jpg')}
                        style={{
                          width: 140,
                          height: 140,
                          borderRadius: 400 / 2,
                          alignSelf: 'center',
                        }}
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
                          Abs Exercises
                        </Text>
                        <Text style={{color: 'black', fontSize: 12}}>
                          Tap Here To Discover More..
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Armexercises')
                  }>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View style={styles.textviewb}>
                      <Image
                        source={require('../images/exercises/arm.jpg')}
                        style={{
                          width: 140,
                          height: 140,
                          borderRadius: 400 / 2,
                          alignSelf: 'center',
                        }}
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
                          Arms
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
          </View>
        </View>
      </ScrollView>
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
    fontWeight: '500',
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
    marginTop: 45,
    marginLeft: 35,
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
    height: 160,
    marginTop: 7,
    marginBottom: 7,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
});
