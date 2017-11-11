import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Header from "./comp/Header";
import ShopList from "./comp/ShopList";
import ShopDetail from "./comp/ShopDetail";
import Scanner from "./comp/Scanner";


 
 export default class App extends React.Component {

   constructor(props){
	   super(props)
	   
	   this.state= { 
		   scanpage:false,
		   timesScanned: 0,
         
	   }
	   this.changestate= this.changestate.bind(this);
	   this.handleScan= this.handleScan.bind(this);
	   this.changeScanPage= this.changeScanPage.bind(this);
	   this.resetScan= this.resetScan.bind(this);
   }
	
	 changestate(){
		 this.setState({
		   scanpage:true
		 })
	 }
	 
	 handleScan() {
		 var num = this.state.timesScanned;
		 num++;
     this.setState({ timesScanned: num }); 
   	  }
	 
	 changeScanPage(){
		 this.setState({
			 scanpage:false
		 })
	 }
     
	resetScan(){
		this.setState({ timesScanned: 0 }); 
		
	}
     
  render() {
   
   
     
   var comp = null;
   if(this.state.scanpage ==true){
	   comp = <Scanner  
	   			onScan={this.handleScan} 
				ScanClosed={this.changeScanPage}
			  />
   }else if (this.state.scanpage ==false){
	   comp = <ShopDetail 
	   			task={this.changestate} 
	   			timeScanned={this.state.timesScanned} 
				navigation={this.props.navigation}
				resetScan={this.resetScan}
                  
       		  />
   }
      
     
    return (
      <View style={styles.container}> 
     	{comp}
      </View>
    );
  }
}


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F2F2',
  },
});
 

 
