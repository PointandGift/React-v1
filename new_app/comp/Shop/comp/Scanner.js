import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions} from 'expo';



export default class BarcodeScannerExample extends React.Component {
	
	
	constructor(props){
	   super(props)
	   this.state = {
        hasCameraPermission: null,
		   
  }
}

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    }
	


  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
       
          <BarCodeScanner style={styles.camera}
            onBarCodeRead={this._handleBarCodeRead}
          >
		  	<View style={styles.rectangleContainer}>
          		<View style={styles.rectangle}/>
        	</View>
        </BarCodeScanner>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
	this.props.onScan(this.props.curShop);
	this.props.ScanClosed();
  }
}

const styles = StyleSheet.create({

   camera: {
	flex: 1,
  },

  rectangleContainer: {
   	flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent'
  },
  
});