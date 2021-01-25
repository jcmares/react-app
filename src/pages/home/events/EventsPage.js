import React from 'react';
import {View, Text, SafeAreaView, FlatList, ScrollView} from 'react-native';

import EventItem from '../../../components/EventItem';
import EventModel from '../../../model/EventModel';
import styles from './EventStyle';

getEvents = () => {
  let events = [];
  events.push(
    new EventModel(
      'GUYWEGDJKMCLÑ-CSPDKCMSDKMCLSDK',
      'Mental Heath Monday',
      'Online Event',
      'Mon, Mar 1 · 3 pm',
    ),
  );
  events.push(
    new EventModel(
      'GUYWEGDJKMCLÑ-CSPDKCMSDKMCLSQQQQ',
      'School Meeting Session',
      'Hamilton High Gym',
      'Tue, Mar 2 · 4:30 pm',
    ),
  );
  events.push(
    new EventModel(
      'GUYWEGDJKMCLÑ-CSPDKCMSDKMCQUNVFGSA',
      'School Meeting Session',
      'Online Event',
      'Mon, Mar 1 · 3:00 pm',
    ),
  );
  events.push(
    new EventModel(
      'GUYWEGDJKMCLÑ-CSPDKCMSDKNHUSJSK8',
      'Mental Heath Monday',
      'Online Event',
      'Mon, Mar 1 · 3 pm',
    ),
  );

  console.log(JSON.stringify(events));
  return events;
};

const EventsPage = () => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
        <Text style={styles.title}>This Week</Text>
        <FlatList
          data={getEvents()}
          renderItem={({item}) => <EventItem event={item} />}
          keyExtractor={(item) => item.id}
        />

        <Text style={styles.title}>Upcoming</Text>
        <FlatList
          data={getEvents()}
          renderItem={({item}) => <EventItem event={item} />}
          keyExtractor={(item) => item.id}
        />
        </ScrollView>
        
      </View>
    </SafeAreaView>
  );
};

export default EventsPage;
