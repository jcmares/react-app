/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import MainNavigator from './src/nav/MainNavigator';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#9E9E9E',
    accent: '#f1c40f',
  },
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <MainNavigator />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
