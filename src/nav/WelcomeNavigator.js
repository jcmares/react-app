import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../pages/login/LoginPage';
import WelcomePage from '../pages/welcome/WelcomePage';
import TabNavigator from './TabNavigator';
import SharedPreference from '../shared-preference/SharedPreference';
import {View} from 'react-native';

const Stack = createStackNavigator();
const sharedPreference = SharedPreference.getInstance();

const WelcomeNavigator = () => {
  const [isSignUp, setSignUp] = useState(false);

  const loadSesion = ()=>{
    sharedPreference.getSignUp((signUp) => {
      console.log('SIGNUP : ' + signUp);
      setSignUp(signUp);
    });
  }
  
  useEffect(() => {
    loadSesion()
  }, [])

  return (
    <View style={{flex: 1}}>
      {isSignUp && (
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
      {!isSignUp && (
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomePage"
            component={WelcomePage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </View>
  );
};

export default WelcomeNavigator;
