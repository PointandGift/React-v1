import React from 'react';
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

//this stuff still needs to be here because there the Tab navigation router requires this to be rendered

//this thing only routes the home page StacK Navigation, meaning that when we push items into First Screen. We just need a funtion to push all the props to that specific section