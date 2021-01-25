import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EventItem = (props) => {
  const {event} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{event.dateBegin}</Text>
      <Text style={styles.header}>{event.header}</Text>
      <Text style={styles.place}>{event.place}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderTopWidth: 8,
    borderTopColor: '#006BD6',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    elevation: 5,
    flex: 1,
  },
  header: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    padding: 5,
  },
  date: {
    fontSize: 14,
    color: '#668BB2',
    fontWeight: 'bold',
    padding: 5,
  },
  place: {
    fontSize: 12,
    color: '#9E9E9E',
    fontWeight: 'bold',
    padding: 5,
  },
});
export default EventItem;
