import React, { Component } from 'react';
import { StyleSheet,View, Text,TouchableOpacity, Image } from 'react-native';

 
class Header extends Component {
    
    
    
  render() {
	 	
    return (
	 
      <View style={styles.container}>
        	<TouchableOpacity activeOpacity={1}   style={styles.icon}  
		    onPress={() => this.props.navigation.navigate('Home')} >
           <Image style={{width:55, height:55}} source={require('./images/goback.png')} />
           </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  container: {
      justifyContent: 'center',
       alignItems: 'flex-start',
       height:55,
       width:380,
       backgroundColor:"white",
       borderBottomColor: '#bbb',
       borderBottomWidth: 0.5,
       flexDirection:"row",
  },
icon:{
	   paddingBottom:10,
	   marginLeft:-335,
	   marginTop:-5,
}
});
 
export default Header;