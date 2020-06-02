import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

export default class Armexercises extends Component {
  render() {
    return (
      //  <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
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
              <Text style={styles.heading}>SIDE PLANK</Text>
              <Image
                source={require('/Users/Nimra Iftikhar/Documents/final fyp/app/wecare/src/images/exercises/sideplank.jpg')}
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
                  Start on your side with your feet together and one forearm
                  directly below your shoulder. Contract your core and raise
                  your hips until your body is in a straight line from head to
                  feet. Hold the position without letting your hips drop for the
                  allotted time for each set, then repeat on the other side
                </Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                  Calorie Guide :
                </Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Roughly 3-4 calories are burned for every minute of exercise
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
              <Text style={styles.heading}>FOREARM PLANK REACHOUT</Text>
              <Image
                source={require('/Users/Nimra Iftikhar/Documents/final fyp/app/wecare/src/images/exercises/plankreachout.gif')}
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
                  From a normal plank position, reach your right hand forward
                  and tap the floor in front of you. Return your right hand to
                  your starting position, and then reach forward with your left
                  hand to tap the floor in front of you
                </Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                  Calorie Guide :
                </Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Roughly 6-8 calories are burned for every minute of exercise
                  performed.
                </Text>
              </View>
            </View>

            <View style={styles.view}>
              <Text style={styles.heading}>PLANK UP DOWN</Text>
              <Image
                source={require('/Users/Nimra Iftikhar/Documents/final fyp/app/wecare/src/images/exercises/plank-up-down.gif')}
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
                  Start in a high plank with your palms flat, hands
                  shoulder-width aparT.Place your feet hip-width apart. Lower
                  your left arm so that your forearm is on the floor. Then, do
                  the same with your right so that you're in a forearm plank.
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
              <Text style={styles.heading}>JUMPING JACKS</Text>
              <Image
                source={require('/Users/Nimra Iftikhar/Documents/final fyp/app/wecare/src/images/exercises/jumpingjacks.gif')}
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
