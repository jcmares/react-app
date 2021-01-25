import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../../components/ButtonComponent';
import styles from './CreateAccountStyles';



const CreateAccountPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  return (
    <View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior='position'
          keyboardVerticalOffset={Platform.OS === 'ios' ? -70 : -30}
          style={{backgroundColor: '#E5E5E5'}}>
          <View style={styles.container}>
            <View style={{paddingTop: 64}}>
              <Text style={styles.titleH}> Join your JKL </Text>
              <Text style={styles.titleH}> program </Text>
            </View>
            <View style={{paddingTop: 16}}>
              <Text style={styles.title}>Hamilton High School</Text>
            </View>
            <View style={{paddingTop: 102}}>
              <View style={{paddingVertical: 6}}>
                <TextInput
                  style={styles.input}
                  label="Username"
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
              <View style={{paddingVertical: 6}}>
                <TextInput
                  style={styles.input}
                  label="Re-enter your password"
                  value={repassword}
                  onChangeText={(text) => setRepassword(text)}
                />
              </View>
              
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComponent
                  text="Next"
                  isIcon={true}
                  onPress={() => navigation.navigate('ProfilePage')}
                />
              </View>

          </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    </View>
  );
};

export default CreateAccountPage;
