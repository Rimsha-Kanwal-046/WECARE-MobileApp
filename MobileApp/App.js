import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  AsyncStorage,
  Image,
  ScrollView,
} from 'react-native';
import Navbar from './src/components/Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Home from './src/components/Home';
import Exercises from './src/components/Exercises';

import Highemergency from './src/components/Emergencyhandling';
import Emergencyrequest from './src/components/Emergencyrequest';
import FirstAid from './src/components/Firstaid';
import EmergencyNumbers from './src/components/Emergencynumbers';
import Addnumbers from './src/components/Addnumbers';
import Helplines from './src/components/Helplines';
import Travel from './src/components/Travel';

import Notification from './src/components/notifications';
import Dietplan from './src/components/dietplan';
import Drawern from './src/components/Drawer';

import Loginform from './src/components/Loginform';
import {NavigationEvents} from 'react-navigation';
import Logout from './src/components/logout';
//import {Drawer} from 'react-native-router-flux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Fullbody from './src/components/Exercisecategories/Fullbody';
import Armexercises from './src/components/Exercisecategories/Armexercises';
import Absexercises from './src/components/Exercisecategories/Absexercises';
import Upperbody from './src/components/Exercisecategories/Upperbody';
import Lowerbody from './src/components/Exercisecategories/Lowerbody';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class App extends Component {
  createDrawer = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={Notification} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Armexercises" component={Armexercises} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Fullbodyexercises" component={Fullbody} />

          <Stack.Screen
            name="Home"
            children={this.createDrawer}
            //component={Home}
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },

              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Notification')
                  }>
                  <Image
                    source={require('./src/images/notification.png')}
                    style={{
                      width: 45,
                      height: 45,
                      alignSelf: 'center',
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="drawern"
            component={Drawern}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="notification"
            component={Navbar}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Loginform"
            component={Loginform}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Highemergency" component={Highemergency} />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Absexercises" component={Absexercises} />
          <Stack.Screen name="Upperbody" component={Upperbody} />
          <Stack.Screen name="Lowerbody" component={Lowerbody} />
          <Stack.Screen name="Dietplan" component={Dietplan} />
          <Stack.Screen name="Drawern" component={Drawern} />
          <Stack.Screen name="Helplines" component={Helplines} />
          <Stack.Screen name="Emergencyrequest" component={Emergencyrequest} />
          <Stack.Screen name="Emergencynumbers" component={EmergencyNumbers} />
          <Stack.Screen name="Addnumbers" component={Addnumbers} />
          <Stack.Screen name="Firstaid" component={FirstAid} />
          <Stack.Screen
            name="Exercises"
            component={Exercises}
            options={{
              title: 'Exercises',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="Travel" component={Travel} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
