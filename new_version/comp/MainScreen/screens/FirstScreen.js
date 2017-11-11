import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';
import Tabs from './tabs';
import CardList from '../addcards/App';
import { AppRegistry } from 'react-native';
import { LinearGradient } from 'expo';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  };
  constructor(props){
    super(props);
    this.state = { 
      text: 'Search',
      modalVisible: false 
    }

    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <LinearGradient colors={['#d1175b', '#7f1438']} style={styles.container}>
        <View style={styles.inputHolder}>
          
          <Image style={styles.logo} source={require('./images/logo.png')} />
          
          <TouchableOpacity onPress={() => {
          this.setModalVisible(true)
          }}>
            <View>
              <Image style={styles.plusButton} source={require('./images/plus.png')} />
            </View>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <CardList setModalVisible={this.setModalVisible} />
        </Modal>
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
    backgroundColor: '#FFFFFF',     
  },
  // Content header
  header: {
    color: '#000000',                  
    fontSize: 22,
  },
  // Content text
  text: {
    color: 'rgba(0, 0, 0, 0.75)', // Semi-transparent text
    textAlign: 'center',                // Center
    fontSize: 18,
  },
  inputHolder: {
    flexDirection: 'row',
    marginTop: 35,
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    alignItems: 'center',
  },
  logo: {
    marginLeft: "47%",
    width:40,
    height: 32,
    backgroundColor: 'transparent'
  },
  plusButton: {
    marginTop: -10,
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
