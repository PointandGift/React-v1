import React, { Component } from 'react';
import { StyleSheet,View, Text, ScrollView,Image,
Button,TouchableHighlight,Modal} from 'react-native';
import { StackNavigator } from "react-navigation";

import Swipeable from 'react-native-swipeable';
import Map from '../Map/App';
import Stamp from './Stamp';
import ShopModal from "./ShopModal";

 
class ShopDetail extends Component {
    
	constructor(props){
	   super(props)
	   this.state = {
       leftActionActivated: false,
       toggle: false,
	   pressStatus: false, 
       modalVisible:false,
	  
  };
		
	
	this.HideUnderlay=this.HideUnderlay.bind(this);
	this.ShowUnderlay=this.ShowUnderlay.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
}
		
	HideUnderlay(){
    	this.setState({ 
		pressStatus: false
	});
  	}
	
  	ShowUnderlay(){
    	this.setState({ 
		pressStatus: true 
	});
  	}
     
 
	setModalVisible(visible){
	 setTimeout(() => {
     this.setState({
        modalVisible:visible
      })
    }, 300);
	}

	

		
	
  render() {  
  		
         
	  	var txt = "";
	  
   		if(this.state.pressStatus ==true){
	    txt= "Cancel";
   		}else {
	    txt= "Join";
        
   	    };
	   
     
    return (
		
	<ScrollView style={{backgroundColor:"white"}}>  
        
        
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          >
         <View style={{backgroundColor: "rgba(0,0,0,0.5)", flex: 1, justifyContent: "center", alignItems: "center"}}>
           <View style={{marginTop: 32, marginLeft: 15, backgroundColor: "lightblue", width: 260, borderRadius: 5, height: 260}}>
            
			<View>
              <TouchableHighlight onPress={() => {
			  this.setModalVisible(!this.state.modalVisible);
              this.props.navigation.navigate('Reward', {name: 'Reward'})}}>
              <Text>Redeem Now</Text>
             </TouchableHighlight>
		
			 <Button title="New Card" onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
              }}/>
			  
            </View>
          </View>
         </View>
        </Modal>    
        
        
        
	{/************Shop Info**************/}
		
    	<View style={styles.shopbox}>
				<Image
					style={styles.shop1}
					source={require('../imgs/shop1.jpg')}
				/>
			<View style={styles.txtbox}>
				 <Text style={styles.txt1}>
				 Root Cafe
				</Text>
         
				 <Text style={styles.txt2}>
				 3700 Willingdon Ave, Burnaby
				</Text>
   			</View>

        </View>
				 
	{/************Button**************/}
		 
		<View style={styles.btnbox}>
        <TouchableHighlight
          activeOpacity={1}
		  onPress={()=> this.setState({toggle: !this.state.toggle})}
          style={ this.state.pressStatus ? styles.buttonPress : styles.button }
          onHideUnderlay={this.HideUnderlay.bind(this)}
          onShowUnderlay={this.ShowUnderlay.bind(this)}
        >
          <Text style={ this.state.pressStatus ? styles.welcomePress : styles.welcome }>{txt}</Text>
        </TouchableHighlight>
      </View>
		  
		  
				
	<View style={styles.divider}/>		 
		
            
   
	 	
		
 {/************Stamp**************/}	

		
 		<Stamp task={this.props.task}  timeScanned={this.props.timeScanned} setModalVisible={this.setModalVisible}
		/>

		<View style={styles.divider2}/>	

		<View>
			<Text style={styles.h1}>
				Get Your Free Coffee	
			</Text>

			<Text style={styles.txtbody}>
				Complete 8 Bel Cafe stamps and get the
				9th one for free. Stamps can only be earned
				by order placed in store.	
			</Text>
		</View>		
        
        

     {/************Map*****


        <View style={styles.mymap}>
            <Map />
        </View>
	*********/}	


        <View style={styles.bottombox}></View>

	</ScrollView>	
		 
    );
  }
}









const styles = StyleSheet.create({
	
shopbox:{
	width:750,
	height:150,
	backgroundColor:"white",
	alignItems: 'flex-start',
    flexDirection:'row'
    
},
	
shop1:{
	marginTop:40,
	marginLeft:25,
	width:115,
	height:115,
	borderRadius:8,
},
	
txtbox:{
	marginTop:25,
	marginLeft:-5,
	
},
	
txt1:{
      marginLeft:20,
      marginTop:15,
      fontSize:24,
	  fontWeight:'600',
      color:"black",
	  color:"#404040",
      
  },  
    
txt2:{
      marginLeft:20,
      marginTop:5,
      fontSize:14,
      color:"grey",
      
  },
	

	
divider:{
	width:320,
	marginTop:35,
	borderBottomColor: '#DCDCDC',
    borderBottomWidth: 0.8,
	marginLeft:25,

 },
	
btnbox:{
	width:130,
	
	position:"absolute",
	marginLeft:220,
	marginTop:108,

},
	
welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'rgb(194,23,91)'
  },
  welcomePress: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  button: {
    borderColor: 'rgb(194,23,91)',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonPress: {
    borderColor: 'rgb(194,23,91)',
    backgroundColor: 'rgb(194,23,91)',
    borderWidth: 1,
    borderRadius: 10,
  },
	
 h1:{
	 fontSize:20,
	 fontWeight:"500",
	 marginLeft:25,
	 marginTop:35,
	 color:"#404040",
 },
	
divider2:{
	width:320,
	marginTop:45,
	borderBottomColor: '#DCDCDC',
    borderBottomWidth:0.8,
	marginLeft:25,

 },
	
txtbody:{
	fontSize:16,
    color:"grey",
	width:325,
	marginTop:20,
	marginLeft:25,
	lineHeight: 20,
},
	
    
mymap:{
    marginTop:60,
    width:380,
    height:250,
    position:"relative",
    overflow:"hidden",
},
    
bottombox:{
    width:400,
    height:75,
    backgroundColor:"white",
    
}

    
});
 
export default ShopDetail;