import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';

const TextLinkComponent = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Text style={styles.font}>{props.text}</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
    font: {
        fontSize: 13,
        color: '#003E7E',
        fontWeight: 'normal',
        paddingVertical: 5,
        textAlign: 'center',
      },
})

export default TextLinkComponent;