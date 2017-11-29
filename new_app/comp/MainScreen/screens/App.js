import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';
import Home from './FirstScreen';
import Addcard from '../addcards/App';
import PointPages from '../addcards/Point/App';



export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { 
      		show:true,
			goback:null
    }
	this.ShowList= this.ShowList.bind(this);
	this.onSelected= this.onSelected.bind(this);
	this.backtoHome= this.backtoHome.bind(this);

  }
ShowList(){
		 this.setState({
			 show:false
		 });
	 }
backtoHome(){
		 this.setState({
			 show:true
		 });
	 }
	
onSelected(){
		 this.setState({
			 goback:true
		 });
	 }
    
  render() {
	  var BackPage=null;
	  if(this.state.show == true){
		  BackPage=<Home 
		  cards={this.props.screenProps.cards}
		  
		  cardPush={this.props.screenProps.pushCards}
		  
		  />
	  }else if (this.state.show == false){
		  BackPage=<Addcard onSelected={this.onSelected}/>
		
	  }else if(this.state.goback == true) (
		  	BackPage=(
				<View>
	  		    <PointPages ShowList={this.ShowList} backtoHome={this.backtoHome} />
				</View>
			)
	 )
  
    
    return (
	<View>
      {BackPage}
 	</View>
    );
  }
}

const styles = StyleSheet.create({
  
  
});


