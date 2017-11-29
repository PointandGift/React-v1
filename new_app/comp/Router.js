import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { TabNavigator, StackNavigator,TabBarBottom} from 'react-navigation';

import ProfileScreen from './MainScreen/ProfileScreen';
import RewardScreen from './MainScreen/RewardScreen';
import ShopScreen from './Shop/comp/ShopList';
import ShopApp from './Shop/App';


import Scanner from './Shop/comp/Scanner';
import TogglePage from './Reward/App';
import FirstScreen from './MainScreen/screens/FirstScreen';
import Test from './MainScreen/screens/test';
import CardList from './MainScreen/addcards/App';
import CardScan from './MainScreen/addcards/Point/App';
import BarcodeScan from './MainScreen/addcards/Point/PointScan/Scanner';





const ShopNav = StackNavigator({
  ShopScreen: {
    screen: ShopScreen,
    navigationOptions: {
    title: "Shop",              
    },
  },
  ShopApp:{
    screen: ShopApp,
    navigationOptions: ({ navigation }) => ({
    title: "Shop Detail",
    headerBackTitle: 'Cancel', 
    }),
  },
	
  
    
	Scanner: {
    screen: Scanner,
    navigationOptions: ({ navigation }) => ({
    title: null,
    headerBackTitle: 'Cancel', 
    }),
  },
	
});

const RewardNav =  StackNavigator({
	
	Reward: {
    screen:RewardScreen,
    navigationOptions: {
    title: "Reward", 
	headerLeft:null,
    },
   },
	
	Redeem: {
    screen:TogglePage,
    navigationOptions: {
    header: null,              
    },
  },
	
});

const HomeNav = StackNavigator({
  Home: {
	  screen: FirstScreen
  },
	
  CardList: {
    screen:CardList,
  },
	
  BarcodeScan: {
    screen:BarcodeScan,
  },

  CardScan: {
    screen:CardScan,
  },

  Test: {
    screen:Test,
  },
	
   
   
});


// Tab navigation for Home and Settings screens
const TabNav = TabNavigator({
  Card: {
    screen: HomeNav,
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
    screen:ShopNav,
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
       console.log(this.props.test + " App.js")
		return(
			<TabNav screenProps={{
						 shops:this.props.shops,
						 cardPush:this.props.pushCards,
                         myReward:this.props.myReward,
                         pushReward:this.props.pushReward,
                         pushStampCard:this.props.pushStampCard,
						 stampCard:this.props.stampCard,
						 pushCards:this.props.pushCards,
                         cards:this.props.cards,
                        
						 curShop: this.props.curShop,
						 changeCurShop: this.props.changeCurShop,
						 pushShop1done:this.props.pushShop1done,
                         pushShop1dot:this.props.pushShop1dot,
						 onScan:this.props.onScan,
						 resetScan:this.props.resetScan,
					
						 
						 changeToggle:this.props.changeToggle,

             curCard:this.props.curCard,
             changeCurCard:this.props.changeCurCard
						

            }} />
            
            
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


 
