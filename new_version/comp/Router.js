import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { TabNavigator, StackNavigator,TabBarBottom} from 'react-navigation';

import CardScreen from './MainScreen/CardScreen';
import ProfileScreen from './MainScreen/ProfileScreen';
import RewardScreen from './MainScreen/RewardScreen';
import ShopScreen from './Shop/comp/ShopList';
import ShopDetail from './Shop/App';
import Scanner from './Shop/comp/Scanner';
import FirstScreen from './MainScreen/screens/FirstScreen';
import SecondScreen from './MainScreen/screens/SecondScreen';


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

const RewardNav =  StackNavigator({
	Reward: {
    screen: RewardScreen,
    navigationOptions: {
    title: "Reward",              
    },
  },
	
});

const HomeNav = StackNavigator({
  Home: {screen: FirstScreen},
  Card: {
    screen: SecondScreen,
  }, 
});


// Tab navigation for Home and Settings screens
const TabNav = TabNavigator({
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
    screen: RewardNav,
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


export default class NavComp extends React.Component{
	
	render(){
		console.log(this.props.test);
		return(
			<TabNav users={this.props.users} screenProps={this.props.test} />
		)
	}
}

const styles = StyleSheet.create({
  
icon: {
    marginTop:2,
    marginLeft:-2,
    width: 37,
    height: 37 ,
  },
});


 
