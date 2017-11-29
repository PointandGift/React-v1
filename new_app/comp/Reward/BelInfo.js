import React, { Component } from 'react';
import { StyleSheet,View, Text, ScrollView,Image,
Button,TouchableHighlight} from 'react-native';

 
export default class BelInfo extends React.Component {
  render() {
	  
       
    return (
	
		
	<View style={styles.container}>
	    
		
		 {/************Map**************/}	
    
        <View >
        
				<Image style={styles.mymap}
					source={{uri:this.props.curShop.shopImg}}
				/>
        </View>
					
			
  	
	{/************Shop Info**************/}
		
      <View style={styles.bg}>
				    
    
    	<View style={styles.shopbox}>
               <Image
					style={styles.bel_image}
					source={{uri:this.props.curShop.shopImg}}
				/>
			<View style={styles.txtbox}>
				 <Text style={styles.txt1}>
				 {this.props.curShop.name}
				</Text>
         
				 <Text style={styles.txt2}>
				 {this.props.curShop.address}
				</Text>
   			</View>

        </View>
				    
	 	
 {/************Get your free coffee**************/}	

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
        

             </View>
	
    	</View>		
    );
  }
}

const styles = StyleSheet.create({
  container: {
	     justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#F5F5F5",
     
  },
    
bg:{
    height:500,
    backgroundColor:"#F5F5F5",
},

shopbox:{
	  width:300,
      
	  flexDirection:"row",
    
},
	
bel_image:{
	  marginTop:30,
	  width:80,
	  height:80,
	  borderRadius:40,
},
	
txtbox:{
	  marginLeft:25,
},
	
txt1:{
      marginTop:40,
      fontSize:24,
	  fontWeight:'600',
      color:"black",
	  color:"#404040",
  },  
    
txt2:{
      marginTop:5,
      fontSize:14,
      color:"grey",  
  },
	
 h1:{
	 fontSize:20,
	 fontWeight:"500",
	 marginLeft:15,
	 marginTop:30,
	 color:"#404040",
 },
	
divider2:{
	width:320,
	marginTop:25,
	borderBottomColor: '#DCDCDC',
    borderBottomWidth:0.8,
	
 },
	
txtbody:{
	fontSize:14,
    color:"grey",
	width:325,
	marginTop:20,
	marginLeft:15,
	lineHeight: 20,
},
	
mymap:{
    width:380,
    height:180,
    overflow:"hidden",
},
    

    
});
 
