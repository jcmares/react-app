import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeNavigator from './WelcomeNavigator';
import {Linking} from 'react-native';
import RegisterNavigator from './RegisterNavigator';
import SharedPreference from '../shared-preference/SharedPreference';
import TabNavigator from './TabNavigator';

const useMount = (func) => useEffect(() => func(), []);
const sharedPreference = SharedPreference.getInstance();

const useInitialURL = () => {
  const [url, setUrl] = useState(null);
  const [processLink, setProcessLink] = useState(false);
  const [isLogin, setLogin] =  useState(false);
  
  useMount(() => {
    const getUrlAsync = async () => {
      const initialURL = await Linking.getInitialURL();
      console.log("DEEP LINK : " + initialURL);
      setTimeout(() => {
        if (initialURL !== null){
          sharedPreference.saveToken(initialURL);
        }
        setUrl(initialURL);
        setProcessLink(true);
      }, 1000);
    };

    getUrlAsync();
  });

  return {url, processLink, isLogin};
};



const MainNavigator = () => {
  const {url: initialUrl, processLink} = useInitialURL();

  return (
    <NavigationContainer>
      {processLink && initialUrl !== null && <RegisterNavigator /> }
      {processLink && initialUrl === null && <WelcomeNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
