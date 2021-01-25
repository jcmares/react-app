import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EventPage from '../pages/home/events/EventsPage';
import PastEventPage from '../pages/home/events/PastEventPage';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Upcoming"
      tabBarOptions={{
        inactiveTintColor: '#9E9E9E',
        activeTintColor: '#9E9E9E',
        labelStyle: {
          fontWeight: 'bold',
          color: '#003E7E',
          fontSize: 18,
          textTransform: 'none',
        },
      }}>
      <Tab.Screen name="Upcoming" component={EventPage} options={{ tabBarLabel: 'Upcoming'}} />
      <Tab.Screen name="Past" component={PastEventPage} options={{ tabBarLabel: 'Past'}}/>
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
