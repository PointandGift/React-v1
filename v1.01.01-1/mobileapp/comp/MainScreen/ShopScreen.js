import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Shop from '../Shop/App';
import ShopList from "../Shop/comp/ShopList";
import ShopDetail from "../Shop/comp/ShopDetail";
import Scanner from "../Shop/comp/Scanner";


export class ShopScreen extends React.Component {

    
    
  static navigationOptions = {
    tabBarLabel: 'Shop',
    tabBarIcon: ({ focused }) => (
      <Image
		style={[styles.icon]}
        source={focused? require('../icons/menu_shopsred.png'):
  		require('../icons/menu_shops.png')
       }
      />
    ),
  };

  render() {
    const { navigate } = this.props.navigation;
   return (
    <View style={styles.container}>
	   <ShopList />
    </View>
  );
  }
};





const styles = StyleSheet.create({
  
icon: {
    marginTop:2,
    marginLeft:-2,
    width: 37,
    height: 37 ,
  },
});

const ShopNav = StackNavigator({
  ShopList : {screen:ShopList },
  ShopDetail: { screen: ShopDetail },
  Scanner: { screen: Scanner },
});

export default ShopNav
