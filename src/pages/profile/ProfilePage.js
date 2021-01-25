import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../../components/ButtonComponent';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from './ProfileStyles';

const ProfilePage = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [imageProfile, setImageProfile] = useState(null);

  getPhoto = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      saveToPhotos: true,
      quality: 0.5,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('user cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ' + error);
      } else {
        console.log('response: ' + JSON.stringify(response.uri));

        setImageProfile(response.uri);
      }
    });
  };

  getGallery = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response.uri));
        setImageProfile(response.uri);
      }
    });
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior='position'
          keyboardVerticalOffset={Platform.OS === 'ios' ? -70 : -30 }
          style={{backgroundColor: '#E5E5E5'}}>
          <View style={styles.container}>
            <View style={{paddingTop: 64}}>
              <Text style={styles.titleH}>Update your </Text>
              <Text style={styles.titleH}>profile</Text>
            </View>
            <View style={{alignItems: 'center', paddingTop: 42}}>
              <View style={{width: 120, height: 120}}>
                <TouchableHighlight onPress={() => getPhoto()}>
                  <Image
                    source={
                      imageProfile == undefined
                        ? require('../../assets/profile-icon.png')
                        : {uri: imageProfile}
                    }
                    style={styles.profileImg}
                  />
                </TouchableHighlight>
                <Image
                  source={require('../../assets/take-photo.png')}
                  style={styles.iconCamera}
                />
              </View>
            </View>

            <View style={{paddingTop: 26, alignItems: 'center'}}>
              <Text style={styles.title}>Jazmine Huffmon</Text>
              <Text style={styles.title}>Hamilton High School</Text>
            </View>

            <View style={{paddingTop: 43}}>
              <View style={{paddingVertical: 6}}>
                <TextInput
                  style={styles.input}
                  label="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={{paddingVertical: 6}}>
                <TextInput
                  style={styles.input}
                  label="Phone Number"
                  value={phone}
                  onChangeText={(text) => setPhone(text)}
                />
              </View>
              
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComponent
                  text="Next"
                  isIcon={true}
                  onPress={() => navigation.navigate('SingUpPage')}
                />
              </View>

          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ProfilePage;
