import React, { Component } from 'react';
import { StyleSheet,View, Text,Image} from 'react-native';

import Swipeable from 'react-native-swipeable';
import * as Animatable from 'react-native-animatable';

 
class Stamp extends Component {
    
	constructor(props){
	   super(props)
	   this.state = {
       leftActionActivated: false,
       toggle: false,
	   butnum:0,
	   pressStatus: false, 
	  
  };
		
	this.openpage=this.openpage.bind(this);
}
		
   	openpage(){
	   this.props.task();
   }
		
		
	
  render() {
	  
	 
			
 const {leftActionActivated, toggle} = this.state;    
 	  var lightBtn =[];
      var notlightBtn =[];
	  var lastStampdone= (
		   <View style={styles.stampdone}></View>
	   );
	  
	  var lastStampdot= (
		   <View style={styles.stampdot}></View>
	   );
	  
	  
	  console.log(this.props.timeScanned);
      for(var i=0; i<this.state.butnum; i++){
	
	  if (i<this.props.timeScanned){
		  console.log("test");
          var comp = (
            <View key={i} style={styles.stampdone}>
             </View>
          );
          lightBtn.push(comp)
		  
      	} 
		else{
			console.log("not scanned test");
          	var comp = (
            <View key={i} style={styles.stampdot}>
             </View>
      	);
    	  notlightBtn.push(comp)
			
	 	}  
	 };
	
	if(this.props.timeScanned >= 5){
		console.log("lastcolor")
		lightBtn.push(lastStampdone)
	} else if (this.props.timeScanned < 5){
		notlightBtn.push(lastStampdot) 
	}
	  
	  
	 
	  
	 
    return (
	
 	<View style={styles.SwipeBox}>
        
			  <View style={styles.stampbox}>	

				<Text style={styles.stamptxt}>
					Swipe to stamp my card
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


		<View style={styles.circle}>
				<View style={styles.lightBtnBox}>
					{lightBtn}
					{notlightBtn}
				</View>
		</View>
            

		</Swipeable>




		</View>


    );
  }
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
      marginRight:20,
      backgroundColor:"lightgrey"
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
    backgroundColor:"black"
	
},

stampdone:{
    width: 30,
    height: 30,
	marginLeft:15,
	marginTop:25,
    borderRadius: 50,
    backgroundColor:"lightblue"
	
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
	
stamptxt:{
	width:120,
	height:100,
	fontSize:14,
	marginRight:10,
	marginTop:30,
	color:"grey",
	
}

    
});
 
export default Stamp;