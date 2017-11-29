import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Home from './screens/FirstScreen';
import CardList from './screens/addcards/App';
import CardScan from './addcards/Point/App';

export default class Tabs extends React.Component {
	 constructor(props) {
    super(props);
	
	this.state={
		   home:true,
		   cardlist:false,
		   cardscan:false
	};
		 this.hidehome= this.hidehome.bind(this);
		 this.showlist= this.showlist.bind(this);
		 this.cardConfig= this.cardConfig.bind(this);
	
 }
	
hidehome(){
	this.setState({
		home:false
	});
}
	
showlist(){
	this.setState({
		cardlist:true,
		home:false,
		cardscan:false
	});
}

cardConfig(){
	this.setState({
		cardscan:true
	});
}
    
  render() {
	  var CurNav = null;
	  if(this.state.home==true{
		  CurNav = <Home />
	  }
	  else if (this.state.cardlist==true){
		   CurNav = <CardList />
	  }else if(this.state.cardscan==true){
		   CurNav = <CardScan showlist={this.showlist}
		   cardPush={this.props.screenProps.pushCards}
		   />
	  }

    return (
      <View style={styles.container}>
        {CurNav}
      </View>
    );
  
}

const styles = StyleSheet.create({

  container: {
    flex: 1,                           
  },
  
});
