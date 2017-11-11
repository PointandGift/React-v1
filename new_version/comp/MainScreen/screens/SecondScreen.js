import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.name,
  });
  render() {
    const { goBack } = this.props.navigation;
  
    return (
      <View style={styles.container}>
        <Image style={styles.shoppers}source={require('./shoppers.jpg')}>
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
        <Image style={styles.barcode}source={require('./barcode.jpg')}>
        </Image> 
        <Text style={styles.numbers}>123 456 111
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    shoppers:{
        justifyContent: 'center',
        alignItems: 'center', 
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
        marginTop: 40,  
    },
    numbers:{
        textAlign: 'center',
        fontSize: 25,
        marginTop: 10,
    },
});

