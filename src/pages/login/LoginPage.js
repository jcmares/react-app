import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Keyboard, KeyboardAvoidingView, SafeAreaView, Text, TouchableWithoutFeedback, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../../components/ButtonComponent';
import styles from './LoginStyles';
import TextLinkComponent from '../../components/TextLinkComponent';

const LoginPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === 'ios' ? -90 : -30}
        style={{backgroundColor: '#E5E5E5'}}>
        <View style={styles.container}>
          <View style={{paddingTop: 64}}>
            <Text style={styles.titleH}> Log in your </Text>
            <Text style={styles.titleH}> JKL Program </Text>
          </View>

          <View style={{paddingTop: 149}}>
            <View style={{paddingVertical: 6}}>
              <TextInput
                style={styles.input}
                label="Username, phone number, email"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </View>
            <View style={{paddingVertical: 6}}>
              <TextInput
                style={styles.input}
                label="Choose a password"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View style={{paddingVertical: 6, alignItems: 'flex-start'}}>
              <TextLinkComponent text="Forgot Password?" onPress={() => {}} />
            </View>
          </View>

          <View style={[styles.buttonContainer]}>
            <ButtonComponent
              text="Log In"
              isIcon={false}
              onPress={() => navigation.navigate('TabNavigator')}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginPage;
