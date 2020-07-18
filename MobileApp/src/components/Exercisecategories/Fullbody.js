import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Linking, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Fullbody extends Component {
  render() {
    return (
      //  <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <View style={styles.view}>
              <Text style={styles.heading}>BURPEES</Text>
              <Image
                source={require('../../images/exercises/burpees1.gif')}
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
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    width: 150,
                    height: 30,
                    alignSelf: 'center',
                    borderRadius: 20,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.youtube.com/watch?v=dZgVxmf6jkA',
                    )
                  }>
                  <Text
                    style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                    Video Link
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    width: 150,
                    height: 30,
                    alignSelf: 'center',
                    borderRadius: 20,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.youtube.com/watch?v=aclHkVaku9U',
                    )
                  }>
                  <Text
                    style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                    Video Link
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.view}>
              <Text style={styles.heading}>PLANK</Text>
              <Image
                source={require('../../images/exercises/plank.jpg')}
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
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    width: 150,
                    height: 30,
                    alignSelf: 'center',
                    borderRadius: 20,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.youtube.com/watch?v=pvIjsG5Svck',
                    )
                  }>
                  <Text
                    style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                    Video Link
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.view}>
              <Text style={styles.heading}>PUSH UPS</Text>
              <Image
                source={require('../../images/exercises/pushups.gif')}
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
                  Begin with your chest and stomach flat on the floor. Exhale as
                  you push from your hands and heels, bringing your torso,
                  chest, and thighs off the ground. Pause for a second in the
                  plank position — keep your core engaged. Inhale as you slowly
                  lower back to your starting position
                </Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                  Calorie Guide :
                </Text>
                <Text style={{marginLeft: 5, marginRight: 5}}>
                  Roughly 7-8 calories are burned for every minute of push ups
                  performed. Do set of 10 pushups daily.
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    width: 150,
                    height: 30,
                    alignSelf: 'center',
                    borderRadius: 20,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.youtube.com/watch?v=aclHkVaku9U',
                    )
                  }>
                  <Text
                    style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                    Video Link
                  </Text>
                </TouchableOpacity>
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
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    width: 150,
                    height: 30,
                    alignSelf: 'center',
                    borderRadius: 20,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.youtube.com/watch?v=aclHkVaku9U',
                    )
                  }>
                  <Text
                    style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                    Video Link
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.view}>
              <Text style={styles.heading}>SIT UPS</Text>
              <Image
                source={require('../../images/exercises/situps.gif')}
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
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    width: 150,
                    height: 30,
                    alignSelf: 'center',
                    borderRadius: 20,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.youtube.com/watch?v=aclHkVaku9U',
                    )
                  }>
                  <Text
                    style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                    Video Link
                  </Text>
                </TouchableOpacity>
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
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    width: 150,
                    height: 30,
                    alignSelf: 'center',
                    borderRadius: 20,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.youtube.com/watch?v=aclHkVaku9U',
                    )
                  }>
                  <Text
                    style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                    Video Link
                  </Text>
                </TouchableOpacity>
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
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    width: 150,
                    height: 30,
                    alignSelf: 'center',
                    borderRadius: 20,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.youtube.com/watch?v=aclHkVaku9U',
                    )
                  }>
                  <Text
                    style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                    Video Link
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.view}>
              <Text style={styles.heading}>SIDE PLANK</Text>
              <Image
                source={require('../../images/exercises/sideplank.jpg')}
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
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    width: 150,
                    height: 30,
                    alignSelf: 'center',
                    borderRadius: 20,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.youtube.com/watch?v=aclHkVaku9U',
                    )
                  }>
                  <Text
                    style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                    Video Link
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.view}>
              <Text style={styles.heading}>PULL UPS</Text>
              <Image
                source={require('../../images/exercises/pullups.gif')}
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
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    width: 150,
                    height: 30,
                    alignSelf: 'center',
                    borderRadius: 20,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.youtube.com/watch?v=aclHkVaku9U',
                    )
                  }>
                  <Text
                    style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                    Video Link
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.view}>
              <Text style={styles.heading}>HEEL TOUCHES</Text>
              <Image
                source={require('../../images/exercises/heeltouches.gif')}
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
            <View style={styles.view}>
              <Text style={styles.heading}>RUSSIAN TWISTS</Text>
              <Image
                source={require('../../images/exercises/russiantwist.gif')}
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
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    width: 150,
                    height: 30,
                    alignSelf: 'center',
                    borderRadius: 20,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.youtube.com/watch?v=aclHkVaku9U',
                    )
                  }>
                  <Text
                    style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                    Video Link
                  </Text>
                </TouchableOpacity>
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
    height: 480,
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
