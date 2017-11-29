import React, { Component } from 'react';
import { StyleSheet,View, Text,Image,Button,TouchableHighlight} from 'react-native';

import Swipeable from 'react-native-swipeable';
import * as Animatable from 'react-native-animatable';


 
class Stamp extends Component {
    
	constructor(props){
	   super(props)
	   this.state = {
       			arr:[],
		   		color:false
  	   };
		
	this.openpage=this.openpage.bind(this);	
	this.changeColor=this.changeColor.bind(this);			
}



changeColor(){
	this.setState({
		color:true
	});
}

	

openpage(){
		this.props.task();
	}

   componentDidMount(){
	   this.props.curShop.shop1done = [];
	   this.props.curShop.shop1dot = [];
	   
	  if(this.props.curShop.timeScanned >=   this.props.curShop.butnum){
			this.props.setModalVisible(true);
			this.props.setCurModal(true);
		     this.props.arr = this.props.curShop.shop1dot;
		   
		}    
	   
	   
      for(var i=1; i< this.props.curShop.butnum; i++){
		  console.log("i", i);
		  if (i<=this.props.curShop.timeScanned){
			  var comp = (
				<Image key={i} style={styles.stampdone} source={require('../imgs/diamond_stamp.png')} />
			  );
			  this.props.pushShop1done(this.props.curShop,comp);
			}

		else if (i > this.props.curShop.timeScanned && i < this.props.curShop.butnum){
				var comp = (
				 <View key={i} style={styles.stampdot}>
				 </View>
				);
			  this.props.pushShop1dot(this.props.curShop,comp);
			}  
	 }
      
 		
	if(this.props.curShop.timeScanned >= this.props.curShop.butnum){
		 var lastStampdone= (
		   <Image  key="lastdone"
                style={styles.stampdone} 
                source={require('../imgs/final_stamp.png')}
            />
	 );
		this.props.pushShop1done(this.props.curShop,lastStampdone);
  	
	}else if (this.props.curShop.timeScanned < this.props.curShop.butnum){
		var lastStampdot= (
		   <Image  key="lastdot"
                style={styles.stampdone} 
                source={require('../imgs/final_stamp.png')}
            />
	   		);
		this.props.pushShop1dot(this.props.curShop,lastStampdot);
	}
		
}
	
	

	
  render() {
	 
	  var invisibleBox = null;
	  var msg = null;
	  var textColor;
		
	  if(this.props.curShop.toggle == false){
		  invisibleBox =(
			<TouchableHighlight onPress={this.changeColor}>
			  <View style={styles.invisibleBox}></View>
		  	</ TouchableHighlight>
		  )
		 if(this.state.color==true){ 
			 textColor = "rgb(194,23,91)"
		 }else(textColor ="#191919")
		  msg = "Join to swipe card"
		  
	  }else{
		  msg ="Swipe to stamp card",
		  textColor ="grey"
	  }
	
    return (
		<View style={styles.container}>
			<View style={styles.SwipeBox}>
			  <View style={styles.stampbox}>	
				<Text style={{width:120,height:100,fontSize:18,marginRight:10, marginTop:30,color:textColor}}>
					{msg}
				</Text>
				<View style={styles.arrow}>	
				<Animatable.View animation="slideInLeft" iterationCount={5} direction="alternate">
				  <Image
					style={{width: 70, height: 70}}
					source={require('../icons/arrow.png')}
				  />
				</Animatable.View>
				</View>

		   </View>	
			
				  <Swipeable
					leftActionActivationDistance={155}
					leftContent={(
					  <View style={[styles.leftSwipeItem]}>
					  </View>
					)}
					onLeftActionComplete={this.openpage}
				  >

				<View style={styles.circle} >
						<View style={styles.lightBtnBox} >
							{this.props.curShop.shop1done}
							{this.props.curShop.shop1dot}
						</View>
				</View> 
				</Swipeable> 
				{invisibleBox}		
			</View>
		
  </View>
   
    )
  };
}



const styles = StyleSheet.create({

  SwipeBox:{
      marginTop:15,
      marginLeft:25,
      marginRight:25,
      position:"relative",
      width:325,
      height:230,
      borderRadius: 8,
      backgroundColor:"lightgrey"
  },
	
 invisibleBox:{
	 marginTop:-255,
      width:350,
      height:250,
      borderRadius: 8,
      marginRight:20,
 },
  
  circle:{
    width: 160,
    height: 230,
    borderRadius: 8,
    marginRight:20,
   	marginTop:-200,
    backgroundColor:"rgb(194,23,91)",
},
   
lightBtnBox:{
	position: "relative",
	flexDirection: 'row',
	flexWrap: 'wrap',
 	width:160,
	height:200,

	
     
},

stampdot:{
    width: 30,
    height: 30,
	marginLeft:15,
	marginTop:25,
    borderRadius: 50,
    borderWidth: 2,
    borderColor:"white"
	
},

stampdone:{
    width: 30,
    height: 30,
	marginLeft:15,
	marginTop:25
	
},

	
stampbox:{
		width:100,
		height:200,
		marginLeft:190,
		elevation:0,
},
	
arrow:{
	marginTop:10,
	marginRight:50,
},
	

    
});
 
export default Stamp;