import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,TouchableHighlight,View
} from "react-native";

import TextField from 'react-native-md-textinput';

export default class FloatingLabel extends Component {
  constructor(props) {
    super(props);
    this.inputs = {
      barcode: '',
    };
  }

  render() {
    var displayCard = this.props.cardData.map((obj, i)=>{ return (
      <TextField
          label={'Store'}
          highlightColor={'#D1175B'}
          onChangeText={(text) => {
            this.props.onChangeCard(text)
          }}
          value={obj.title}
          //value={obj.data.card}
          dense={true}
          key={i}
        />
      );
    });
    return (
      <ScrollView style={styles.container}>

        {displayCard}
       
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
		<TouchableHighlight style= {styles.btn_save} onPress={this.props.openInfo} >
          	<Text style= {{color:'#D1175B',fontSize:18,}}>Save</Text>
        </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    paddingTop: 120,
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


