import React from "react";
import {
  StyleSheet,Text,View
} from "react-native";

import Barcode from 'react-native-barcode-builder';

export default class Generator extends React.Component {
  render() {
	  console.log(this.props.BarcodeData)
    return (
      <View style={styles.container}>
        <Barcode value={this.props.BarcodeData} format="CODE128"/>
		
		
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


