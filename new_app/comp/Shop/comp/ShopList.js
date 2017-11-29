import React, { Component } from 'react';
import { StyleSheet,View, Text,Image,ScrollView,
TouchableOpacity,Navigator,Dimensions,} from 'react-native';
import { StackNavigator } from "react-navigation";
var {height, width} = Dimensions.get('window');
import ShopDetail from "./ShopDetail";
import Scanner from "./Scanner";
import Shop from '../App';
 
class ShopList extends Component {


constructor(props){
		super(props)
		this.setShop = this.setShop.bind(this);
}	
  
	setShop(obj){
		this.props.screenProps.changeCurShop(obj);
		this.props.navigation.navigate("ShopApp")
	}
	
	
  render() {
    const { navigate } = this.props.navigation;  
	var shops = this.props.screenProps.shops.map((obj, i)=>{
		return (
		
			<TouchableOpacity key={i} activeOpacity={1} 
			  onPress={this.setShop.bind(this, obj)}
			  style={styles.container}>
			<Image
			  style={{height: 180}}
			  source={{uri:obj.shopImg}}
			/>
			<Text style={styles.txt1}>
			 {obj.name}
			</Text>

			 <Text style={styles.txt2}>
			 3700 Willingdon Ave, Burnaby
			</Text>

			 <View style={styles.circle}>
				 <Text style={styles.txt3}>
					12
				</Text>

				<Text style={styles.txt4}>
				Stamps
				</Text>
			 </View>
		  </ TouchableOpacity>
		)
	})
    return (
        
      <ScrollView>    
   		{shops}
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
 container: {
      marginTop:0,
      marginBottom:25,
      height:265,
      backgroundColor: '#fff',
      position: "relative",
  },
  txt1:{
      marginLeft:20,
      marginTop:15,
      fontSize:24,
      color:"black",
      
  },  
    
 txt2:{
      marginLeft:20,
      marginTop:5,
      fontSize:14,
      color:"grey",
      
  },  
    
circle:{
    alignSelf: 'flex-end', 
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop:-120,
    marginRight:20,
    position: "relative",
    backgroundColor:"rgb(194,23,91)",
    justifyContent: 'center',
    alignItems: 'center'
    
},
txt3:{
      fontSize:32,
      color:"white",
      
  },  
    
 txt4:{
      marginTop:-5,
      fontSize:16,
      color:"white",
      
  },  
   
});


export default ShopList;