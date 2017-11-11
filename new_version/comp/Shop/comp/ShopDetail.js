import React, { Component } from 'react';
import { StyleSheet,View, Text, ScrollView,Image,
Button,TouchableHighlight,Modal} from 'react-native';
import { StackNavigator } from "react-navigation";
import getDirections from 'react-native-google-maps-directions'
import Swipeable from 'react-native-swipeable';
import Stamp from './Stamp';
import ShopModal from "./ShopModal";

 
class ShopDetail extends Component {
    
	constructor(props){
	   super(props)
	   this.state = {
       leftActionActivated: false,
       toggle: false,
       modalVisible:false,
	   butnum:2,
	   lightBtn:[],
	   notlightBtn:[], 
	  
  };
		
    this.setModalVisible = this.setModalVisible.bind(this);
    this. _onPress = this. _onPress.bind(this);
    this. pushlightBut = this. pushlightBut.bind(this);
    this.pushNotlightBut = this.pushNotlightBut.bind(this);
    this.emptyBut = this.emptyBut.bind(this);
}
		
	
 _onPress(){
	 const newState = !this.state.toggle;
	 this.setState({toggle:newState})
 }
     
 
	setModalVisible(bool){
		this.setState({
			modalVisible:bool
		  })
	}
	
	
	
	pushlightBut(data){
    var temp = this.state.lightBtn;
    temp.push(data);
    
    this.setState({
        lightBtn:temp
    });
    
  
	}
	
	pushNotlightBut(data2){
    var temp2 = this.state.notlightBtn;
    temp2.push(data2);
    
    this.setState({
        notlightBtn:temp2
		 });
 
	}
	
	emptyBut(){
		this.setState({
        	lightBtn:[]
		 });
	 };
	

	handleGetDirections = () => {
    const data = {
       source: {
        latitude: -33.8356372,
        longitude: 18.6947617
      },
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459
      },
      params: [
        {
          key: "dirflg",
          value: "w"
        }
      ]
    }
 
    getDirections(data)
  }		
	
  render() {  
  		 
	
     const {toggle} = this.state;
	 const textValue = toggle? "Cancel" : "Join" ;
	 const buttonBg = toggle? "white" :"rgb(194,23,91)" ;
	 const textColor = toggle? "rgb(194,23,91)":"white";
	
     
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
			  this.setModalVisible(false);  
              this.props.navigation.navigate('Reward', {name: 'Reward'})
			  }}>
				  
             <Text>Redeem Now</Text>
             </TouchableHighlight>
		
			 <Button title="New Card" onPress={() => {
				this.setModalVisible(false);
				this.props.resetScan();
										   
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
		  onPress={()=> this._onPress()}
          style={{borderColor: 'rgb(194,23,91)', borderWidth: 1, borderRadius: 10,backgroundColor:buttonBg}}
        >
          <Text style={{fontSize: 16 ,margin: 10,textAlign: 'center',color:textColor}}>{textValue}</Text>
        </TouchableHighlight>
      </View>
   	  
				
	<View style={styles.divider}/>		 
		
            
   
	 	
		
 {/************Stamp**************/}	

		
 		<Stamp 
		task={this.props.task}  
		timeScanned={this.props.timeScanned} 
		setModalVisible={this.setModalVisible}
		butnum={this.state.butnum}
		pushNotlightBut={this.pushNotlightBut}
		pushlightBut={this.pushlightBut}
		lightBtn={this.state.lightBtn}
		notlightBtn={this.state.notlightBtn}
		resetScan={this.props.resetScan}
		
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
        
        

     {/************Map**************/}


        <View style={styles.mymap}>
			<TouchableHighlight onPress={this.handleGetDirections}>
            <Image
				source={require('../imgs/maps.png')}
			/>
			</TouchableHighlight>
        </View>
		


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
	fontSize:14,
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
    
},
stampbox:{
		width:100,
		height:200,
		marginLeft:190,
		elevation:0,
},

    
});
 
export default ShopDetail;