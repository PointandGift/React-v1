import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class BarcodeScannerExample extends React.Component {
	
	constructor(props){
	   super(props)
	   this.state = {
        hasCameraPermission: null,
		barcodeValue:null
		   
  }
	  
}

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    }



	
closeScan(){
	
	}	

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  
  }
	
  _handleBarCodeRead = ({ type, data }) => {
	this.props.getBarcode(data);
	this.props.closeScan();
  }

  
}

