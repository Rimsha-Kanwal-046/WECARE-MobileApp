import React from 'react';
import Home from './Home';
import Notifications from './notifications';
import Logout from './logout';
// import {
//   Appearance,
//   useColorScheme,
//   AppearanceProvider,
// } from 'react-native-appearance';
import {
  NavigationContainer,
  // DefaultTheme,
  // DarkTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

App = () => {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        children={this.createDrawer}
        options={{
          title: 'Navigation Hooks & Themes',
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: 'Det Screen',
        }}
      />
      <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} />

      {/* <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} />
      <Stack.Screen name="Top Tabs" children={this.createTopTabs} /> */}
    </Stack.Navigator>
  );

  createDrawer = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );

  // createTopTabs = props => {
  //   return (
  //     <MaterialTopTabs.Navigator>
  //       <MaterialTopTabs.Screen
  //         name="Tab 1"
  //         component={Tab1}
  //         options={{title: props.route.params.name}}
  //       />
  //       <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
  //       <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
  //     </MaterialTopTabs.Navigator>
  //   );
  // };

  createBottomTabs = () => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen
          name="Tab 1"
          style={{marginBottom: 16}}
          component={Home}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <MaterialBottomTabs.Screen
          name="Tab 2"
          component={Notification}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
        <MaterialBottomTabs.Screen
          name="Tab 3"
          component={Logout}
          options={{
            tabBarLabel: 'Map',
          }}
        />
      </MaterialBottomTabs.Navigator>
    );
  };

  return <NavigationContainer>{this.createHomeStack()}</NavigationContainer>;
};

export default App;
