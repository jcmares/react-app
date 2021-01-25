import React from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonComponent = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.button} >
      <View style={styles.body}>
        <Text style={styles.font}>{props.text}</Text>
        {props.isIcon && <Icon name="angle-right" size={20} color="white" />}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    height: 56,
    backgroundColor: '#003E7E',
    borderRadius: 30,
    
  },
  font: {
    paddingHorizontal: 30,
    fontSize: 16,
    color: 'white',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default ButtonComponent;
