import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';





class RewardScreen extends React.Component {
	
  static navigationOptions = {
    tabBarLabel: 'Reward',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ focused}) => (
	  <Image
		style={[styles.icon]}
        source={focused? require('../icons/menu_rewards_red.png'):
  		require('../icons/menu_rewards.png')
       }
      />
    ),
  };

  render() {
   return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        PNG
      </Text>
    </View>
  );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
icon: {
    marginTop:4,
    marginRight:2,
    width: 38,
    height: 38,
  },
});

export default RewardScreen
