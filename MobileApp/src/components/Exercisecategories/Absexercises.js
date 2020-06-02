import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

export default class Absexercises extends Component {
  render() {
    return (
      //  <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <View style={styles.view}>
              <Text style={styles.heading}>BICYCLE CRUNCHES</Text>
              <Image
                source={require('/Users/Nimra Iftikhar/Documents/final fyp/app/wecare/src/images/exercises/bicyclecrunches.gif')}
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
            <View style={styles.view}>
              <Text style={styles.heading}>RUSSIAN TWISTS</Text>
              <Image
                source={require('/Users/Nimra Iftikhar/Documents/final fyp/app/wecare/src/images/exercises/russiantwist.gif')}
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
                  Sit on the floor and bring your legs out straight. Lean back
                  slightly so your torso and legs form a V-like shape, bracing
                  your abdominal wall to engage your core. Balancing here, twist
                  your torso from side to side without moving your legs
                </Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                  Calorie Guide :
                </Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Roughly 8-10 calories are burned for every minute of exercise
                  performed.
                </Text>
              </View>
            </View>
            <View style={styles.view}>
              <Text style={styles.heading}>BURPEES</Text>
              <Image
                source={require('/Users/Nimra Iftikhar/Documents/final fyp/app/wecare/src/images/exercises/burpees1.gif')}
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
                  Stand up straight, then get into a squat position with your
                  hands on the floor in front of you. Kick your feet back into a
                  push up position and lower your body so that your chest
                  touches the floor. Jump and return your feet to the squat
                  position as fast as possible. Immediately jump up into the air
                  as high as you can
                </Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                  Calorie Guide :
                </Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Burn 10-15 calorie per min. A normal person should do 15-20
                  burpees a day.
                </Text>
              </View>
            </View>

            <View style={styles.view}>
              <Text style={styles.heading}>PLANK</Text>
              <Image
                source={require('/Users/Nimra Iftikhar/Documents/final fyp/app/wecare/src/images/exercises/plank.jpg')}
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
                  Assume a modified push-up position with your elbows bent 90
                  degrees and both forearms resting on the floor. Position your
                  elbows directly underneath your shoulders and look straight
                  toward the floor. Your body should form a perfectly straight
                  line from the crown of your head to your heels.
                </Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                  Calorie Guide :
                </Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Roughly 4-5 calories are burned for every minute of plank
                  performed. Do a plank of 2 to 5 min daily accroding to your
                  stamina.
                </Text>
              </View>
            </View>

            <View style={styles.view}>
              <Text style={styles.heading}>SIT UPS</Text>
              <Image
                source={require('/Users/Nimra Iftikhar/Documents/final fyp/app/wecare/src/images/exercises/situps.gif')}
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
                  Lie down on your back. Bend your legs and place feet firmly on
                  the ground to stabilize your lower body. Cross your hands to
                  opposite shoulders or place them behind your ears, without
                  pulling on your neck. Curl your upper body all the way up
                  toward your knees.
                </Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                  Calorie Guide :
                </Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Roughly 7-10 calories are burned for every minute of exercise
                  performed.
                </Text>
              </View>
            </View>

            <View style={styles.view}>
              <Text style={styles.heading}>PULL UPS</Text>
              <Image
                source={require('/Users/Nimra Iftikhar/Documents/final fyp/app/wecare/src/images/exercises/pullups.gif')}
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
                  Using a box or bench, stand so your chin is already at or
                  above the bar. Pull your shoulders down and back, brace your
                  core, and step off the box. Keep your chin above the bar as
                  long as you can. When your chin drops below the bar, rest for
                  two minutes. Repeat, trying to beat your previous time.
                </Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                  Calorie Guide :
                </Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Roughly 20-25 calories are burned for every minute of pull ups
                  performed.
                </Text>
              </View>
            </View>
            <View style={styles.view}>
              <Text style={styles.heading}>HEEL TOUCHES</Text>
              <Image
                source={require('/Users/Nimra Iftikhar/Documents/final fyp/app/wecare/src/images/exercises/heeltouches.gif')}
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
                  Keep your head and neck on or barely off the ground, as long
                  as you are looking at the ceiling and not straining in any
                  direction. To start the exercise, bend at your midsection to
                  one side while keeping your arms slightly bent or straight and
                  reach until you can touch your heel.
                </Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                  Calorie Guide :
                </Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Roughly 7-10 calories are burned for every minute of exercise
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
