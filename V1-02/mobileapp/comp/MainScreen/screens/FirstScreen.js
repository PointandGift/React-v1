import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Tabs from './tabs';
import { AppRegistry } from 'react-native';
import { LinearGradient } from 'expo';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  };
  constructor(props){
    super(props);
    this.state = { text: 'Search' }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <LinearGradient colors={['#d1175b', '#7f1438']} style={styles.container}>
        <View style={styles.inputHolder}>
          
          <Image style={styles.logo} source={require('./images/logo.png')} />
          
          <TouchableOpacity>
            <View style={styles.scanButton}>
              <Image style={styles.plusButton} source={require('./images/plus.png')} />
            </View>
          </TouchableOpacity>
        </View>
        <Tabs>
          {/* First tab */}
          <View title="POINTS" style={styles.content}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Card', {name: 'Starbucks'})}>
              <View style={styles.card}>
                <Image style={styles.cardimage} source={require('./images/starbucks.png')} />
              </View>
            </TouchableOpacity>
          </View>
          {/* Second tab */}
          <View title="STAMP" style={styles.content}>
            <TouchableOpacity>
              <View style={styles.card2}>
                <Image style={styles.cardimage} source={require('./images/cafe_creme.png')} />
              </View>
            </TouchableOpacity>
          </View>

        </Tabs>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  // App container
  container: {
    height: 120,
  },
  // Tab content container
  content: {
    marginTop: 15,
    marginLeft: 5,
    backgroundColor: '#FFFFFF',         // Darker background for content area
  },
  // Content header
  header: {
    color: '#000000',                   // White color
    fontFamily: 'Avenir',               // Change font family
    fontSize: 22,                       // Bigger font size
  },
  // Content text
  text: {
    color: 'rgba(0, 0, 0, 0.75)', // Semi-transparent text
    textAlign: 'center',                // Center
    fontFamily: 'Avenir',
    fontSize: 18,
  },
  inputHolder: {
    flexDirection: 'row',
    marginTop: 35,
    justifyContent: 'space-between',
    paddingRight: 13,
    paddingLeft: 13,
    alignItems: 'center',
  },
  logo: {
    marginLeft: 155,
    width:40,
    height: 32,
    backgroundColor: 'transparent'
  },
  plusButton: {
    marginTop: -10,
    marginRight: 15,
    width: 24, 
    height: 24, 
    backgroundColor: 'transparent'
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 20,
    width: 160,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#00704a'
  },
  card2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 20,
    width: 160,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'gray'
  },
  cardimage: {
    width: 80,
    height: 80,
    backgroundColor: 'transparent'
  }
});

AppRegistry.registerComponent('Tabs', () => App);
