import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Generator from '../addcards/Point/PointScan/Generator';
import Barcode from 'react-native-barcode-builder';

export default class Test extends React.Component {
    static navigationOptions = {
      title: "My Card"
    }
  render() {
    const { navigate } = this.props.navigation;
    const{screenProps} = this.props;
    console.log(this.props.screenProps.curCard);
    return (
      <View style={styles.container}>
        <Image style={styles.shoppers} source={{uri:this.props.screenProps.curCard.image}} />
        <Text>{this.props.screenProps.curCard.name}</Text>
        <Barcode value={this.props.screenProps.curCard.code} format="CODE128" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
  shoppers:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 150
    },
});
