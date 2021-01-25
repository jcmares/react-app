import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet} from 'react-native';
import UpdatesPage from '../pages/home/UpdatesPage';
import ProfilePage from '../pages/home/ProfilePage';

import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import TopTabNavigator from './TopTabNavigator';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
      
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'My Events') {
            return (iconName = focused ? (
                <Icon name="calendar-text" size={20} color="white" />
              ) : (
                <Icon name="calendar-text" size={20} color="#C5C4C4" />
              ));
          }
          if (route.name === 'Updates') {
            return (iconName = focused ? (
              <Icon name="bell" size={20} color="white" />
            ) : (
              <Icon name="bell" size={20} color="#C5C4C4" />
            ));
          }
          if (route.name === 'My Profile') {
            return (iconName = focused ? (
              <Icon name="account-circle" size={20} color="white" />
            ) : (
              <Icon name="account-circle" size={20} color="#C5C4C4" />
            ));
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#C5C4C4',
        style: {
          height: 90,
          paddingBottom: 20,
          backgroundColor: '#668BB2',
        },
        labelStyle: {
          fontSize: 14,
          
        },
      }}>
      <Tab.Screen name="My Events" component={TopTabNavigator} />
      <Tab.Screen name="Updates" component={UpdatesPage} />
      <Tab.Screen name="My Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 23,
    height: 25,
    tintColor: 'white',
  },
  iconInactive: {
    width: 23,
    height: 25,
    tintColor: '#C5C4C4',
  },
});

export default TabNavigator;
