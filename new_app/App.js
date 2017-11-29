import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighLight,
  TextInput
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';


const styles = require('./styles.js')


import Login from './auth/Login'
import Register from './auth/Register'
import Home from './Home'
import Profile from './comp/MainScreen/ProfileScreen';
export default class rreact extends Component {

  constructor(props) {
    super(props)
    this.state = {
     	userName:'',
		userPic:'',
		userEmail:''
		
    }
	this.pushName = this.pushName.bind(this);
	this.pushPic = this.pushPic.bind(this);
	this.pushEmail = this.pushEmail.bind(this);
  }

	
pushName(newName){
       this.setState({
         userName:newName
       });       
};
	
pushPic(newPic){
       this.setState({
         userPic:newPic
       });       
};

pushEmail(data){
       this.setState({
         userEmail:data
       });       
};

  render() {
	  console.log(this.state.userName + "in router page");
	  
      return (
      <Router>
       <Scene key="root">
         <Scene key="Login" component={Login} title="Login" hideNavBar={true}
		  pushName={this.pushName}
		  pushPic={this.pushPic}
		  pushEmail={this.pushEmail}
		  initial/>
         <Scene key="Register" component={Register} title="Register" hideNavBar={true}   pushName={this.pushName} pushEmail={this.pushEmail}
		  
		  />
         <Scene key="Home" component={Home} title="Home" hideNavBar={true} />
		 <Scene key="Profile" component={Home} title="Profile" hideNavBar={true}
		 userName = {this.userName}		
		 userPic = {this.userPic}		
		 userEmail = {this.userEmail}		
		  />

       </Scene>
     </Router>
    );
  }
}


AppRegistry.registerComponent('rreact', () => rreact);
