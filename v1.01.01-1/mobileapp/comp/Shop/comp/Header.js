import React, { Component } from 'react';
import { StyleSheet,View, Text } from 'react-native';

 
class Header extends Component {
    
    
    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Shop</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  container: {
      height:60,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems:"center",
      paddingTop:15,
	  backgroundColor:"black",
      shadowColor:"#000",
      shadowOffset:{width:0,height:2},
      shadowOpacity:0.8,
      elevation:2,
      position: "relative",
  },
  txt:{
      fontSize:20,
      color:"rgb(194,23,91)",
      
  },  
   
});
 
export default Header;