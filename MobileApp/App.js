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
import Trendandanalytics from './src/components/Trendandanalytics';
import {SafeAreaView} from 'react-native-safe-area-context';
import Notificationdetail from './src/components/notificationdetail';
import Specificexercise from './src/components/Specificexercise';
import Requestshistory from './src/components/Requestshistory';
import UserProfile from './src/components/UserProfile';
//import Img from './src/images/profile.png';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class App extends Component {
  createDrawer = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Home} />
      <Drawer.Screen name="Notifications" component={Notification} />

      <Drawer.Screen name="High Emergency" component={Highemergency} />
      <Drawer.Screen name="Travel Guide" component={Travel} />
      <Drawer.Screen name="Diet Plans" component={Dietplan} />
      <Drawer.Screen name="First Aid" component={FirstAid} />
      <Drawer.Screen name="Exercises" component={Exercises} />
      <Drawer.Screen name="Current Trends & Analytics" component={Home} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Armexercises"
            component={Armexercises}
            options={{
              title: 'Arm Exercises',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{
              title: 'Notifications',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Requesthistory"
            component={Requestshistory}
            options={{
              title: 'Request History',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Fullbodyexercises"
            component={Fullbody}
            options={{
              title: 'Full Body Exercises',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Specificexercises"
            component={Specificexercise}
            options={{
              title: 'Your Exercises',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="notificationdetail"
            component={Notificationdetail}
            options={{
              title: 'Notification Detail',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
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
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />

          <Stack.Screen
            name="drawern"
            component={Drawern}
            options={{headerShown: false}}
          />

          {/* <Stack.Screen
            name="notification"
            component={Navbar}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="Loginform"
            component={Loginform}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Highemergency"
            component={Highemergency}
            options={{
              title: 'High Emergency',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Absexercises"
            component={Absexercises}
            options={{
              title: 'Abs Exercises',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Upperbody"
            component={Upperbody}
            options={{
              title: 'Upper body Exercises',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Lowerbody"
            component={Lowerbody}
            options={{
              title: 'Lower Body Exercises',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Dietplan"
            component={Dietplan}
            options={{
              title: 'Diet Plans',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen name="Drawern" component={Drawern} />
          <Stack.Screen
            name="Helplines"
            component={Helplines}
            options={{
              title: 'Helplines',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{
              title: 'User Profile',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Emergencyrequest"
            component={Emergencyrequest}
            options={{
              title: 'Emergency Requests',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Emergencynumbers"
            component={EmergencyNumbers}
            options={{
              title: 'Emergency Numbers',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Addnumbers"
            component={Addnumbers}
            options={{
              title: 'Add Numbers',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Requestshistory"
            component={Requestshistory}
            options={{
              title: 'Your Emergency Requests',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="CurrentTrendsAndAnalytics"
            component={Trendandanalytics}
            options={{
              title: 'Current Trends & Analytics',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />

          <Stack.Screen
            name="Firstaid"
            component={FirstAid}
            options={{
              title: 'First Aid',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Exercises"
            component={Exercises}
            options={{
              title: 'Exercises',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="Travel"
            component={Travel}
            options={{
              title: 'Travel Guide',
              headerStyle: {
                backgroundColor: '#B12F31',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
