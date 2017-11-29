import React from "react";
import {
  StyleSheet,Text,View,
} from "react-native";

import Scanner from "./PointScan/Scanner";
import ScanConfirm from "./PointScan/Scan_confirm";
import Cardinfo from "./PointScan/Cardinfo";



export default class App extends React.Component {
 	
	
  constructor(props) {
    super(props);
	
	this.state={
		pointScan:true,
		barcodeValue:"",
		infoPage:false,
		inputText:"",
		store: this.props.mainData,
		home:this.props.goHome
	};
	this.closeScan= this.closeScan.bind(this);
	this.getBarcode= this.getBarcode.bind(this);
	this.openInfo= this.openInfo.bind(this);
	this.onChangeTextHandler= this.onChangeTextHandler.bind(this);
	this.cardData = this.cardData.bind(this);
 }
 
getBarcode(Scandata){
	this.setState({
		barcodeValue:Scandata
	});
	console.log(Scandata+ "in datascan")
}

cardData(CardData){
	this.setState({
		store:CardData
	});
}

closeScan(){
		 this.setState({
			 pointScan:false
		 });
	 }
	
openInfo(){
		 this.setState({
			 infoPage:true,
			 pointScan:null
		 });
	 }
	
onChangeTextHandler(inputValue){
  this.setState({
	barcodeValue: inputValue,
  });
}

onChangeCard(inputValue){
	this.setState({
		store: inputValue,
	})
}


	
  render() {
	 

console.log(this.cardData.img + " cardMAIN IMG")  
	  
   var comp = null;
   if(this.state.pointScan == true){
	   comp = <Scanner
	    showlist={this.props. showlist}
       closeScan={this.closeScan} 
       getBarcode={this.getBarcode}
	   navigation={this.props.navigation}
	   showlist={this.props.showlist}
		 goHome={this.props.goHome}
	   />
	   
   }else if(this.state.pointScan == false) {
	   comp = <ScanConfirm 
	   BarcodeData={this.state.barcodeValue}
       
	   onChangeTextHandler= {this.onChangeTextHandler}
	   openInfo={this.openInfo}
	   cardData={this.state.store}
	   cardPush={this.props.cardPush}
     setModalVisible={this.props.setModalVisible}
		 goHome={this.props.goHome}
         
	   /> 
	  
   }else if (this.state.infoPage == true){
	   comp = <Cardinfo 
       BarcodeData={this.state.barcodeValue} 
       cardMain={this.state.store}
			 setModalVisible={this.props.setModalVisible}
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
	
  },
  
});


