import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Button,
  ScrollView,TouchableHighlight,View
} from "react-native";


import TextField from 'react-native-md-textinput';

export default class FloatingLabel extends Component {
  constructor(props) {
    super(props);
    this.inputs = {
      barcode: '',
    };
    //
    this.addData = this.addData.bind(this);
  }

  addData(){
    var new_object = {
      name:this.props.cardData.card,
      image:this.props.cardData.img,
      code:this.props.BarcodeData
    }

    this.props.cardPush(new_object);
  }

  render() {
	
	  
    console.log(this.props.cardData);
	 
    return (
      <ScrollView style={styles.container}>
        <Button title={"Back"} onPress={this.props.goHome}/>

        <TextField
          label={'Store'}
          highlightColor={'#D1175B'}
          onChangeText={(text) => {
            this.props.onChangeTextHandler(text)
          }}
          value={this.props.cardData.card}
          dense={true}
		  keyboardType={'numbers-and-punctuation'}
        />
       
        <TextField
          label={'Barcode Number'}
          highlightColor={'#D1175B'}
          onChangeText={(text) => {
            this.props.onChangeTextHandler(text)
          }}
          value={this.props.BarcodeData}
          dense={true}
		  keyboardType={'numbers-and-punctuation'}
        />
        
		
		<View style= {styles.box}>
		<TouchableHighlight style={styles.btn_save} 
    onPress={()=>{
      this.addData();
	    this.props.openInfo();
    }}>
          	<Text style= {{color:'#D1175B',fontSize:18,}}>Save</Text>
        </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
	
  },
	
box: {
     alignItems: 'center',
	 justifyContent: 'center'
     
	
  },
	
 btn_save: {
  marginTop: 80,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 15,
  height: 50,
  width: 250,
  borderWidth: 2,
  borderColor: '#D1175B',
  
},
  
});


