import React, { Component } from 'react'; 
import { StyleSheet,View,Text,Image,TouchableOpacity } from 'react-native'; 
import SwitchButton2 from './SwitchButton2';
import BelScan from './BelScan';
import BelInfo from './BelInfo';


export default class SwitchButton1 extends React.Component {
	constructor () {
        super();

        this.state = {
          activeSwitch: 1
        };
    }


	
	
    render () {
		console.log(this.props.screenProps.curShop.mapImg + "testing image map")
		
		var view1 = <BelScan curShop = {this.props.screenProps.curShop}/>;
		var view2 = <BelInfo curShop = {this.props.screenProps.curShop}/>;
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>
			     
			  <View style={styles.box}>
                
                    <TouchableOpacity style={styles.plusButton} 
                        activeOpacity={1} 
		                onPress={() =>
                        this.props.navigation.navigate('Reward', {name: 'Reward'})}
            
                    >
                        <Image style={{width:55, height:55}} source={require('./goback.png')} />
                    </TouchableOpacity>  
                
            <View style={styles.togglebtn}>
                <SwitchButton2 
                    onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                    text1 = 'Ticket'                     // optional: first text in switch button --- default ON
                    text2 = 'Info'                       // optional: second text in switch button --- default OFF
                    switchWidth = {160}                 // optional: switch width --- default 44
                    switchHeight = {30}                 // optional: switch height --- default 100
                    switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                    switchBorderRadius = {50}          // optional: switch border radius --- default oval
                    switchSpeedChange = {300}           // optional: button change speed --- default 100
                    switchBorderColor = '#d4d4d4'       // optional: switch border color --- default #d4d4d4
                    switchBackgroundColor = 'transparent'      // optional: switch background color --- default #fff
                    btnBorderColor = '#D1175B'          // optional: button border color --- default #00a4b9
                    btnBackgroundColor = '#D1175B'      // optional: button background color --- default #00bcd4
                    fontColor = '#D1175B'               // optional: text font color --- default #b1b1b1
                    activeFontColor = 'white'            // optional: active font color --- default #fff
                />
                          </View>
                </View>
                    
                { this.state.activeSwitch === 1 ? view1 : view2 }
               
            </View>

        );
    }

}





const styles = StyleSheet.create({
  container: {
      
    	backgroundColor:"white",
  },

    
box:{ 
       justifyContent: 'center',
       alignItems: 'center',
       height:75,
       paddingTop:30,
       paddingBottom:10,
       width:380,
       backgroundColor:"#F5F5F5",
        borderBottomColor: '#bbb',
        borderBottomWidth: 0.5,
        flexDirection:"row",
},
    
    plusButton: {
    left:-95,
  },
    
   togglebtn:{
      left:-25, 
    }
   
});





