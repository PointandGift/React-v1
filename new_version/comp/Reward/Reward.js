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
	
	
  render() {
	  console.log(this.props.screenProps + "RRR")
   return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        {this.props.screenProps}
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
