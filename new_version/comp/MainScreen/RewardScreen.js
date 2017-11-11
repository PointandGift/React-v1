import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Reward from "../Reward/Reward";





class RewardScreen extends React.Component {
	constructor(props){
        super(props);
        
        this.state={
            shopReward:[]
        }
		this.pushShop = this.pushShop.bind(this);
	 }
	
	
	
	
 	     pushShop(data){
          var arr= this.state.shopReward;
          arr.push(data);
          
          this.setState({
              shopReward:arr
          });
          
          console.log(arr);
    }
	
  render() {
	 
   return (
    <View style={styles.container}>
      
       <Reward screenProps={this.props.screenProps}/>
     
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
