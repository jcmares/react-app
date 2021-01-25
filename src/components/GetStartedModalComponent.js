import {StyleSheet} from 'react-native';
import React from 'react';
import {
  Alert,
  Modal,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const GetStartedModalComponent = (props) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        Alert.alert('modal has been closed.');
      }}>
      <View style={styles.modalContainer}>
        <TouchableWithoutFeedback
          onPress={props.onClosed}>
          <Icon name="close" size={30} color="white" />
        </TouchableWithoutFeedback>

        <View style={{paddingHorizontal: 40, paddingTop: 180}}>
          <Text style={styles.modalTitle}>Check the</Text>
          <Text style={styles.modalTitle}>invitation we </Text>
          <Text style={styles.modalTitle}>sent</Text>
        </View>

        <View style={{paddingHorizontal: 40, paddingTop: 27}}>
          <Text style={styles.modalText}>
            To sign up for the J.K. Livin App,{' '}
          </Text>
          <Text style={styles.modalText}>tap the Access button sent from </Text>
          <Text style={styles.modalText}>your Instructor.</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: '#003E7E',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default GetStartedModalComponent;
