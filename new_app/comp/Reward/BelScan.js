import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';



export default class BelScan extends React.Component {
  render() {
  
    return (
        <View style={styles.container}>
			<Image style={styles.qrcode}source={require('./scan.png')}>
			<Text style={styles.belcafe}>
			Bel Cafe
			</Text>
			<Text style={styles.ID}>
				Order ID #81250000
			</Text>
			</Image>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
   
		justifyContent: 'center',
        alignItems: 'center',
    	
    },

    belcafe:{
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor:'transparent',
        fontWeight: 'bold',
        marginTop:100,
    },
    ID:{
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
        backgroundColor:'transparent',
        marginTop:4,
    },
    qrcode:{
        marginTop:50,
         
    },
    
});

