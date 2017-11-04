import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';

const Navigation = StackNavigator({
  Home: {screen: FirstScreen},
  Card: {
    screen: SecondScreen,
  }, 
});

export default Navigation;
