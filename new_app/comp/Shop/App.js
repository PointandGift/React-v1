import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import ShopDetail from "./comp/ShopDetail";
import Scanner from "./comp/Scanner";


 
 export default class App extends React.Component {

   constructor(props){
	   super(props)
	   
	   this.state= { 
		   scanpage:false,
	   }
	   
	   this.changestate= this.changestate.bind(this);
	   this.changeScanPage= this.changeScanPage.bind(this); 
   }
	

	 changestate(){
		 this.setState({
		   scanpage:true
		 });
	 }

	 changeScanPage(){
		 this.setState({
			 scanpage:false
		 })
	 }
     
	
	 

  render() {
	 

   var comp = null;
   if(this.state.scanpage ==true){
	   comp = <Scanner  
	   			onScan={this.props.screenProps.onScan} 
				ScanClosed={this.changeScanPage}
                curShop = {this.props.screenProps.curShop}
				
			  />
   }else if (this.state.scanpage ==false){
	   comp = <ShopDetail 
	   			task={this.changestate}  
				navigation={this.props.navigation}
                pushStampCard ={this.props.screenProps.pushStampCard}
                pushReward ={this.props.screenProps.pushReward}
				
                spliceStamp ={this.props.screenProps.spliceStamp}
				curShop = {this.props.screenProps.curShop}
				changeToggle={this.props.screenProps.changeToggle}
				pushShop1dot={this.props.screenProps.pushShop1dot}
				pushShop1done={this.props.screenProps.pushShop1done}
				shop1done={this.props.screenProps.shop1done}
				shop1dot={this.props.screenProps.shop1dot}
				resetScan={this.props.screenProps.resetScan}
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
 

 
