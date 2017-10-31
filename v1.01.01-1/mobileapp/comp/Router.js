import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { TabNavigator, StackNavigator,TabBarBottom} from 'react-navigation';
import CardScreen from './MainScreen/CardScreen';
import ProfileScreen from './MainScreen/ProfileScreen';
import RewardScreen from './MainScreen/RewardScreen';
import ShopScreen from './Shop/comp/ShopList';
import ShopDetail from './Shop/App';
import Scanner from './Shop/comp/Scanner';



const ShopNav = StackNavigator({
  ShopScreen: {
    screen: ShopScreen,
    navigationOptions: {
    title: "Shop",              
    },
  },
  ShopDetail: {
    screen: ShopDetail,
    navigationOptions: ({ navigation }) => ({
      title: "Shop Detail",
    headerBackTitle: 'Cancel', 
    }),
  },
  
    Scanner: {
    screen: Scanner,
    navigationOptions: {
    header:null,              // Hide the header
    },
  },

});

// Tab navigation for Home and Settings screens
export const Root = TabNavigator({
  Card: {
    screen: CardScreen,
    navigationOptions: {
      tabBarLabel: 'Card',
      tabBarIcon: ({ focused}) => (
	  <Image
		style={[styles.icon]}
        source={focused? require('./icons/menu_cards_red.png'):
  		require('./icons/menu_cards.png')
       }
      />
    )},
   
  },
  Shop: {
    screen: ShopNav ,
    navigationOptions: {
      tabBarLabel: 'Shop',
      tabBarIcon: ({ focused }) => (
      <Image
		style={[styles.icon]}
        source={focused? require('./icons/menu_shopsred.png'):
  		require('./icons/menu_shops.png')
       }
      />
    )},
  },
   Reward: {
    screen: RewardScreen,
    navigationOptions: {
      tabBarLabel: 'Reward',
      tabBarIcon: ({ focused }) => (
      <Image
		style={[styles.icon]}
        source={focused? require('./icons/menu_rewards_red.png'):
  		require('./icons/menu_rewards.png')
       }
      />
    )},
  },
   Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ focused }) => (
      <Image
		style={[styles.icon]}
        source={focused? require('./icons/menu_profile_red.png'):
  		require('./icons/menu_profile.png')
       }
      />
    )},
  }, 
},{
    tabBarOptions:{
        activeTintColor:"#e91e63"
    }}
);

const styles = StyleSheet.create({
  
icon: {
    marginTop:2,
    marginLeft:-2,
    width: 37,
    height: 37 ,
  },
});


 
