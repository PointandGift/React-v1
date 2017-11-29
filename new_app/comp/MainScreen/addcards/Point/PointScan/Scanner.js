import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import Header from "./Header";
import { StackNavigator} from 'react-navigation';

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


  render() {
	const { navigate } = this.props.navigation;
    const { hasCameraPermission } = this.state;
	  
	 var HeaderScan=(
	 		 <View style={styles.container}>
        	<TouchableOpacity activeOpacity={1} style={styles.icon}  
		    onPress={() =>
		    this.props.goHome()} >
           <Image style={{width:55, height:55}} source={require('./images/goback.png')} />
           </TouchableOpacity>
      </View>
	 
	 ) 
	  
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
		 
		 
         <BarCodeScanner style={styles.camera}
            onBarCodeRead={this._handleBarCodeRead}
          >
		  {HeaderScan}
		  	<View style={styles.rectangleContainer}>
          		<View style={styles.rectangle}/>
        	</View>
        </BarCodeScanner>
		
      );
    }
  
  }
	
  _handleBarCodeRead = ({ type, data }) => {
	this.props.getBarcode(data);
	this.props.closeScan();
  }

  
}

const styles = StyleSheet.create({

   camera: {
  flex:1
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical:200,
    backgroundColor: 'transparent'
  },

  rectangle: {
    height: 120,
    width: 300,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent'
  },
	
container: {
      flex: 1,
      justifyContent: 'center',
       alignItems: 'flex-start',
       height:55,
       width:380,
       backgroundColor:"white",
       borderBottomColor: '#bbb',
       borderBottomWidth: 0.5,
       flexDirection:"row",
  },
icon:{
	   paddingBottom:10,
	   marginLeft:-335,
	   marginTop:-5,
}
});
  
