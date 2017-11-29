import React, { Component } from 'react';
import { StyleSheet,View, Text, ScrollView,Image,
Button,TouchableHighlight,Modal} from 'react-native';
import { StackNavigator } from "react-navigation";
import getDirections from 'react-native-google-maps-directions'

import Stamp from './Stamp';


 
class ShopDetail extends Component {
    
	constructor(props){
	   super(props)
	   this.state = {
       modalVisible:false,
       cancelModal:false,
	   curModal:null,
	   butnum:2,
	   arr:[],
	  
		   	
	   
  };
		
		
    this.setModalVisible = this.setModalVisible.bind(this); 
    this.emptyBut = this.emptyBut.bind(this);
    this.registerReward = this.registerReward.bind(this);
    this.setCurModal = this.setCurModal.bind(this);
    this.setModalforCancel = this.setModalforCancel.bind(this);
}
  
   setCurModal(bool){
	   this.setState({
			curModal:bool
		 });
	if(this.props.curShop.toggle == true){
		if(this.state.curModal == false){
			this.setModalVisible(true);	
		}
	}   
}
	
  
	setModalVisible(bool){
		this.setState({
			modalVisible:bool
		  })
	}
	
   	setModalforCancel(bool){
		this.setState({
			cancelModal:bool,
            modalVisible:false,
			curModal:false,
		  })
	} 
    
	
    registerReward(){
          var obj = {
              shopImg: this.props.curShop.shopImg,
              shopName: this.props.curShop.name,
			  route:this.props.curShop.route,
              address:this.props.curShop.address,
              reward:this.props.curShop.reward
          }
          this.props.pushReward(obj);
      } 
   
     
	

    
    
	
	emptyBut(){
		
		var lastdot= (
		   <Image  key="lastdot"
                style={styles.stampdone} 
                source={require('../imgs/final_stamp.png')}
            />
	    );
	   	for(var x=1; x < this.props.curShop.butnum; x++){
		  var comp =(
            <View key={x} style={styles.stampdot}>
            </View> 
		  );
			this.state.arr.push(comp);
		}

		this.state.arr.push(lastdot);
		this.props.pushShop1dot(this.props.curShop,this.state.arr);
		this.props.resetScan(this.props.curShop);

	};
	
	
	
	

	handleGetDirections = () => {
    const data = {
       source: {
        latitude:null,
        longitude: null
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
  		 
	console.log(this.props.curShop.toggle + "ssssss")
	
	var textValue=null;
	var buttonBg =null; 
	var textColor=null; 
	  
	if(this.props.curShop.toggle ==true){
		textValue ="Cancel",
		buttonBg="white",
		textColor="rgb(194,23,91)"
		
	}else{
		textValue ="Join",
		buttonBg="rgb(194,23,91)",
		textColor="white"
		
	}


       
     var myModal = null;
      
    if (this.state.curModal==false){
            
          myModal=(
             <View style={styles.moda21container}>
               <Text style={{fontSize:16, marginTop:30}}>Are you sure you want to Cancel?</Text>
			  	 <View style={styles.butWrap}>
             	<View style={{marginRight:30}}> 
				 <Button title="No" 
					color="#D1175B"
					onPress={() => {
					this.setModalforCancel(false);
					this.props.changeToggle(this.props.curShop,true);
				  }}/>
				 </View>
			  
			 <TouchableHighlight 
			  	  underlayColor='transparent'
			  	  style={styles.butYes}
			  	  onPress={() => {
                  this.props.navigation.navigate('Home');
			  	  this.setCurModal(true);
				  this.setModalVisible(false);
			  	  this.props.changeToggle(this.props.curShop,false);
                  }}>  
                 <Text style={styles.text1}>Yes</Text>
                 </TouchableHighlight>
				 
			  </View> 
             </View> 
            );
        console.log("Modal2")
     }else{
		 {
         myModal = (
         <View style={styles.modal1container}>
			 <View style={styles.image}>
            <Image style={styles.congratulation}source={require('../icons/congratulation.png')}>
            </Image>
		  	<Text style={styles.text3}>Congratulations!</Text>
            <Text style={styles.text4}>You've completed all the stamps!
            {'\n'}Get your free coffee now!</Text>
			
			
            </View>
              <TouchableHighlight 
			  style={styles.button1}
			  underlayColor='transparent' onPress={() => {
			  this.setModalVisible(false);
              this.registerReward();
              this.emptyBut();
              this.props.navigation.navigate('Reward', {name: 'Reward'})
			  }}>
				  
             <Text style={styles.text1}>Redeem Now</Text>
             </TouchableHighlight>
		
			<View style={{marginTop:10}}> 
			<Button title="New Card" 
			 		 color="#D1175B"
					 
			 	onPress={() => {
				this.setModalVisible(false);
				this.emptyBut();
				this.registerReward();						   
            }}/>
         </View>
		 </View>
         );
       console.log("Modal1")
     }
	 }  
      
      
      
    return (
		
	<ScrollView style={{backgroundColor:"white"}}>  
        
        
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          >
         <View style={{backgroundColor: "rgba(0,0,0,0.5)", flex: 1, justifyContent: "center", alignItems: "center"}}>    
			{myModal}
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
		  underlayColor="#8e1646"
		  onPress={()=> {
				   this.props.changeToggle(this.props.curShop,true);
				   this.setCurModal(false);
				  
                  }}
          style={{borderColor: 'rgb(194,23,91)', borderWidth: 1, borderRadius: 10,backgroundColor:buttonBg}}
        >
          <Text style={{fontSize: 16 ,margin: 10,textAlign: 'center',color:textColor}}>{textValue}</Text>
        </TouchableHighlight>
      </View>
   	  
				
	<View style={styles.divider}/>		 
		
            
   
	 	
		
 {/************Stamp**************/}	

		
 		<Stamp 
		task={this.props.task}  
		 
		setModalVisible={this.setModalVisible}
		setCurModal={this.setCurModal}
		pushShop1dot={this.props.pushShop1dot}
		pushShop1done={this.props.pushShop1done}
		resetScan={this.props.resetScan}
		curShop = {this.props.curShop}
		curModal = {this.state.curModal}
		arr={this.state.arr}
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
            <Image style={{width:380,height:250}}
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
modal1container:{
    alignItems: 'center',
    justifyContent: 'center',
	backgroundColor: "white",
	width: 280, 
	borderRadius: 10,
	height: 320
},
image:{
        alignItems:'center',
    },
 button1:{
        backgroundColor:'#D1175B',  
        justifyContent:'center',
        width:180,
        height:40,
        borderRadius: 10,
        marginTop:20,
    },
text1:{
        color:'white',
        textAlign:'center',
        fontSize:18,
        justifyContent:'center',
    },
	
text3:{
        fontSize:22,
        fontWeight:'500',
        textAlign:'center',
        justifyContent:'center',
		
    },
    text4:{
        textAlign:'center', 
        color:'#808080',
        justifyContent:'center',
        marginTop:10,
    },
congratulation:{
        justifyContent:'center',
        alignItems:'center',
        height:110,
        width:110,
    },
  
moda21container:{
    alignItems: 'center',
    justifyContent: 'center',
	backgroundColor: "white",
	width: 280, 
	borderRadius: 10,
	height: 160
},
butWrap:{
		flexDirection:'row',
		marginTop:40,
},
butYes:{
        backgroundColor:'#D1175B',  
        justifyContent:'center',
        width:100,
        height:35,
        borderRadius:4,
       	
    },
    
});
 
export default ShopDetail;