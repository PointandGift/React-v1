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
	this.setShop = this.setShop.bind(this);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
	
	setShop(obj){
		this.props.screenProps.changeCurShop(obj);
		this.props.navigation.navigate("ShopApp")
	}
	
  render() {
   
    const { navigate } = this.props.navigation;
    const{screenProps} = this.props;
    //mapping out the cards and using a binding function to display the certain information
    var allCards = this.props.screenProps.cards.map((obj, index)=>{
      return(
        <View key={index}>
          <TouchableOpacity onPress={() =>{
              this.props.screenProps.changeCurCard(obj);
              navigate('Test');
        }}>
            <View>
              <Image style={styles.card} source={{uri:obj.image}} />
            </View>
          </TouchableOpacity>
        </View>
      )
    });
    
    
    
    var allrewards = [];
        
      for(var i = 0; i< screenProps.stampCard.length; i++){
         if(screenProps.stampCard[i].toggle == true){
		  var comp = (
		 <View key={i}>	  
	       <TouchableOpacity key={i} style={styles.card2}
            onPress={this.setShop.bind(this, screenProps.stampCard[i])}
            >
                <Image  style={styles.cardimage} source={{uri:screenProps.stampCard[i].shopImg}} />
		    </TouchableOpacity>
		</View>	  
			  
         );
          allrewards.push(comp);
      }
	};	 
	 

    //returning the Home screen component
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
          <CardList 
		  navigation={this.props.navigation}
		  setModalVisible={this.setModalVisible}
		  cardPush={this.props.screenProps.pushCards}
      cards={this.props.screenProps.cards}
		  />
        </Modal>
          
        <Tabs>
          {/* First tab */}
          <View title="POINTS" style={styles.content}>
              {allCards}
          </View>
          
          {/* Second tab */}
          <View title="STAMP" style={styles.content}>
              {allrewards}
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
    flexWrap:'wrap'
  },
  // Tab content container
  content: {
    flex:1,
    backgroundColor: '#FFFFFF',
    flexDirection:'row',
    flexWrap:'wrap'
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
