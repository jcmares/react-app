import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateAccountPage from '../pages/create-account/CreateAccountPage';
import ProfilePage from '../pages/profile/ProfilePage';
import SingUpPage from '../pages/welcome/SignUpPage';
import TabNavigator from './TabNavigator';


const Stack = createStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateAccountPage"
        component={CreateAccountPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          headerShown: false,
        }}
      />
      
      <Stack.Screen
        name="SingUpPage"
        component={SingUpPage}
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
    
  );
};

export default RegisterNavigator;
