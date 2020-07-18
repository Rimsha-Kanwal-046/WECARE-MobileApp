import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

export default class Lowerbody extends Component {
  render() {
    return (
      //  <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <View style={styles.view}>
              <Text style={styles.heading}>SQUATS</Text>
              <Image
                source={require('../../images/exercises/squats.gif')}
                style={{
                  marginRight: 5,
                  marginLeft: 5,
                  marginTop: 5,
                  width: 280,
                  height: 200,
                  alignSelf: 'center',
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 20, color: 'red'}}>Instructions :</Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Find a foot stance that feels best for you. Pointing your toes
                  slightly outwards helps some, but keeping them parallel is
                  fine, too. If you’re not sure what’s best, start by putting
                  your feet shoulder-width apart and pointed about 15 degrees
                  outwards.
                </Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                  Calorie Guide :
                </Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Roughly 10 calories are burned for every minute of squats
                  performed. A normal person should do 15-20 squats a day.
                </Text>
              </View>
            </View>

            <View style={styles.view}>
              <Text style={styles.heading}>JUMPING JACKS</Text>
              <Image
                source={require('../../images/exercises/jumpingjacks.gif')}
                style={{
                  marginRight: 5,
                  marginLeft: 5,
                  marginTop: 5,
                  width: 280,
                  height: 180,
                  alignSelf: 'center',
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 20, color: 'red'}}>Instructions :</Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Stand upright with your legs together, arms at your sides.
                  Bend your knees slightly, and jump into the air. As you jump,
                  spread your legs to be about shoulder-width apart. Stretch
                  your arms out and over your head. Jump back to starting
                  position.
                </Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                  Calorie Guide :
                </Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Roughly 15-17 calories are burned for every minute of exercise
                  performed.
                </Text>
              </View>
            </View>

            <View style={styles.view}>
              <Text style={styles.heading}>STEP UPS</Text>
              <Image
                source={require('../../images/exercises/stepups.gif')}
                style={{
                  marginRight: 5,
                  marginLeft: 5,
                  marginTop: 5,
                  width: 280,
                  height: 220,
                  alignSelf: 'center',
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 20, color: 'red'}}>Instructions :</Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  To start, place your entire right foot onto the bench or
                  chair. Press through your right heel as you step onto the
                  bench, bringing your left foot to meet your left so you are
                  standing on the bench. Return to the starting position by
                  stepping down with the right foot, then the left so both feet
                  are on the floor.
                </Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                  Calorie Guide :
                </Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Roughly 14 calories are burned for every minute of step ups
                  performed.
                </Text>
              </View>
            </View>
            <View style={styles.view}>
              <Text style={styles.heading}>BICYCLE CRUNCHES</Text>
              <Image
                source={require('../../images/exercises/bicyclecrunches.gif')}
                style={{
                  marginRight: 5,
                  marginLeft: 5,
                  marginTop: 5,
                  width: 280,
                  height: 180,
                  alignSelf: 'center',
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 20, color: 'red'}}>Instructions :</Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Start by lying on the ground, with your lower back pressed
                  flat into the floor and your head and shoulders raised
                  slightly above it. Place your hands lightly on the sides of
                  your head; don't knit your fingers behind. ... Lift one leg
                  just off the ground and extend it out
                </Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                  Calorie Guide :
                </Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Roughly 10-15 calories are burned for every minute of exercise
                  performed.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View>
          <Text style={{fontSize: 20, color: 'black'}}>
            Scroll Left Or Right
          </Text>
        </View>
      </View>
      // </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    alignItems: 'center',
    //  justifyContent: 'center',
  },
  view: {
    marginTop: 20,
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 320,
    height: 430,
    marginLeft: 18,
    marginTop: 40,
    marginBottom: 10,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
