import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from './WelcomeStyles';
import ButtonComponent from '../../components/ButtonComponent';
import TextLinkComponent from '../../components/TextLinkComponent';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import GetStartedModalComponent from '../../components/GetStartedModalComponent';

const WelcomePage = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 49}}>
        <Image
          style={styles.logo}
          source={require('../../assets/Logo-WMan-bk.png')}
        />
      </View>
      <Text style={styles.title}>Your J.K.Livin</Text>
      <Text style={styles.title}>Program in one place.</Text>
      <View style={{paddingTop: 89}}>
        <View style={styles.rowContainer}>
          <View style={{padding: 10}}>
            <Image
              style={styles.image}
              source={require('../../assets/fitness.png')}
            />
          </View>
          <View style={{padding: 10}}>
            <Image
              style={styles.image}
              source={require('../../assets/gratitude.png')}
            />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{padding: 10}}>
            <Image
              style={styles.image}
              source={require('../../assets/community.png')}
            />
          </View>
          <View style={{padding: 10}}>
            <Image
              style={styles.image}
              source={require('../../assets/nutrition.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonAlign}>
        <ButtonComponent
          onPress={() =>
            //navigation.navigate('CreateAccountPage')
            setModalVisible(true)
          }
          text="Get Started"
          isIcon={false}
        />
      </View>

      <View style={styles.linkAlign}>
        <TextLinkComponent
          onPress={() => navigation.navigate('LoginPage')}
          text="Log In"
        />
      </View>
      <GetStartedModalComponent
        visible={modalVisible}
        onClosed={() => setModalVisible(false)}
      />
    </View>
  );
};

export default WelcomePage;
