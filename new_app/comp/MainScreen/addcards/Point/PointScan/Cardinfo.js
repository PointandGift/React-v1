import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

import Generator from "./Generator";

export default class Cardinfo extends React.Component {
  
  render() {
    
    return (
      <View style={styles.container}>
          <Button title={"Home"} onPress={()=>{this.props.setModalVisible(false)}}/>
        <Image style={styles.shoppers}
		 source={{uri:this.props.cardMain.img}}>
        </Image>
      <View style={styles.buttonContainer}>
      <View style={styles.notesButton}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>
              Notes
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.storesButton}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>
              Stores
          </Text>
        </TouchableOpacity>
      </View>
      </View>
		 
		<View  style={styles. barcode}>
        <Generator BarcodeData={this.props.BarcodeData}/>								 
        <Text>{this.props.BarcodeData}</Text>
		</View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    shoppers:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 150
    },
    buttonContainer:{
        flexDirection: 'row',
        width: 299,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notesButton:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 149.5, 
        height:35,
        borderRightColor: '#E6E6E6',
        borderRightWidth: 1,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    storesButton:{
        alignItems: 'center',
        justifyContent: 'center',
        height:35,
        width: 149.5, 
        borderLeftColor: '#E6E6E6',
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 16,
        color: '#808080',
    },
    barcode:{
        marginTop: 20,  
    },
    numbers:{
        textAlign: 'center',
        fontSize: 25,
        marginTop: 10,
    },
});

