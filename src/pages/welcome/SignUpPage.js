import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, Text, View} from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import styles from './SignUpStyles';

const SingUpPage = () => {
  const navigation = useNavigation();

  return (
    
      <View style={styles.container}>
        <View style={{paddingTop: 64, paddingStart: 40, paddingEnd: 40}}>
          <Text style={styles.titleH}> Welcome to the </Text>
          <Text style={styles.titleH}> JKL family </Text>
        </View>
        <View style={{padding: 20 , paddingTop: 46,}}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/logo-wman-blue.png')}
              style={styles.logo}
            />
          </View >

          <View style={styles.privacyContainer}>
            
            <Text style={styles.legendPrivacy}>Lorem ipsum dolor sit amet, </Text>
            <Text style={styles.legendPrivacy}>consectetur adipiscing elit, sed do </Text>
            <Text style={styles.legendPrivacy}>eiusmod tempor incididunt ut labore </Text>
            <Text style={styles.legendPrivacy}>et dolore magna aliqua. Ut enim ad </Text>
            <Text style={styles.legendPrivacy}>minim veniam, quis nostrud </Text>
            <Text/>
            <Text style={styles.legendPrivacy}>exercitation ullamco laboris nisi ut </Text>
            <Text style={styles.legendPrivacy}>aliquip ex ea commodo consequat. </Text>
            <Text style={styles.legendPrivacy}>Duis aute.</Text>
            <Text/>
            <Text style={styles.legendPrivacy}>just keep livin,</Text>
            <Text style={styles.legendPrivacy}>Camila and Mathew McConaughry</Text>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <ButtonComponent
            text="Let's Go"
            isIcon={false}
            onPress={() => navigation.navigate('TabNavigator')}
          />
        </View>
        
      </View>
  );
};

export default SingUpPage;
