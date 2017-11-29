import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View,TouchableOpacity,ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class RewardScreen extends React.Component {
	 constructor(props) {
            super(props)
			
			this.state ={
				myReward:this.props.screenProps.myReward,

			}
  }
	
setShop(obj){
		this.props.screenProps.changeCurShop(obj);
		this.props.navigation.navigate("Redeem")
	}
	
  render() {
      
	
	  
      const{myReward} = this.state;
      const { navigate } = this.props.navigation;

	  
	  var allrewards = [];  
      for(var e = 0; e< myReward.length; e++){
          var comp = (
            <TouchableOpacity key={e} style={styles.shopbox}
			 onPress={this.setShop.bind(this, myReward[e])}
			 
			 >
			  
              <Image style={styles.shop1}
              source={{uri:myReward[e].shopImg}}
              />
              <View  style={styles.txtbox}>
                  <Text style={styles.txt1}>{myReward[e].shopName}</Text>
                  <Text style={styles.txt2}>{myReward[e].address}</Text>
                  <Text style={styles.txt3}>{myReward[e].reward}</Text>
              </View>
            </TouchableOpacity>
          );
          allrewards.push(comp);
	 
      }	
  
	  
	  
	  
   
     
   return (
        <ScrollView style={styles.container}>
          {allrewards}
	   		
        </ScrollView>
    );
  }
}





const styles = StyleSheet.create({
   container: {
   
    backgroundColor:"#F5F5F5",
  },
    
    shopbox:{
	width:750,
	height:150,
    marginBottom:10,
	backgroundColor:"white",
	alignItems: 'flex-start',
    flexDirection:'row',
    
},
    shop1:{
	marginTop:20,
	marginLeft:20,
	width:115,
	height:115,
	borderRadius:8,
},
 txtbox:{
    marginLeft:15,
	marginTop:40,
	marginLeft:15,
},
txt1:{
      fontSize:24,
	  fontWeight:'500',
      color:"black",
	  color:"#404040",
  },
    
txt2:{
      marginTop:4,
      fontSize:14,
      color:"grey",
  },
    
txt3:{
     
      marginTop:18,
      fontSize:14,
       color:"rgb(194,23,91)",
  },  
    
});


