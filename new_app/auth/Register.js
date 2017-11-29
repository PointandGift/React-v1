import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,
  TextInput,Image,Button,KeyboardAvoidingView
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import firebaseApp from './Firebase'

export default class Login extends Component{
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pass: '',
	  username:''
    }

  }
	

	
	
	
 _registration() {

      var s= firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).catch(function(error) {
        alert(error.message)
      });
	 this.props.pushName(this.state.username);
	 this.props.pushEmail(this.state.email);
  }
componentWillUnmount () {
  firebaseApp.auth().signOut().then(function() {
    // Sign-out successful.

  }, function(error) {
    // An error happened.
  });
}
  render() {
    return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
		
		 <View style={styles.gradientContainer}>
                <Image style={styles.gradient} source={require('./images/bg.png')}
                />
         </View>
		
		<View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('./images/logo.png')}
                />
        </View>
		
		 <View style={styles.userWrapper}>
				<Image style={styles.inlineImg} source={require('./images/username.png')}
                />
          <TextInput
            onChangeText={(name)=> this.state.username = name}
            style={styles.login}
            placeholder="Username"
            autoCorrect={false}
            autoCapitalize="none"
			placeholderTextColor='white'
          />
		</View>										   
												   
												   
												 
        <View style={styles.inputWrapper}>
				<Image style={styles.inlineImg} source={require('./images/username.png')}
                />
          <TextInput
            onChangeText={(email)=> this.state.email = email}
            style={styles.login}
            placeholder="Your Email"
            autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
			placeholderTextColor='white'
          />
		</View>
			
        <View style={styles.passwordWrapper}> 
			<Image style={styles.inlineImg} source={require('./images/password.png')}
                />
		 <TextInput
            onChangeText={(pass)=> this.state.pass = pass}
            style={styles.login}
            placeholder="Your Password"
            secureTextEntry = {true}
			placeholderTextColor='white'
          />
		</View>	
			
        <TouchableOpacity style={styles.button} onPress={this._registration.bind(this)}>
              <Text style={styles.btntext}>
                Sign Up
              </Text>
         </TouchableOpacity>

			<View style={styles.createAccount}>				
						<Text style={{color:"white", top:11}}>Already have an account? </Text>
					   <Button title="Login"  color="white" onPress={Actions.Login} />
				 
			</View>		
       
      </KeyboardAvoidingView>
    );
  }
}

styles = StyleSheet.create({
 container: {
    flex:1,
	alignItems: 'center', 
  },
							
  gradientContainer: {
     
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 170
    },
	
 logoContainer: {
        alignItems: 'center',
        marginTop: -600,
    },
	
passwordWrapper: {
		marginTop:10,
	},
	

	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		top: 7,
	},

userWrapper:{marginTop: 95,
			
},
	
inputWrapper: {
		marginTop: 10,
	},
  login : {
	 height: 40,
	 width:290,
	 paddingLeft:35,
     marginBottom: 20,
     borderWidth: 1,
     borderTopColor: 'transparent',
     borderRightColor: 'transparent',
     borderBottomColor: '#FFFFFF',
     borderLeftColor: 'transparent',
	 color:"white"
	
  },
  button: {
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 50,
    marginTop:20,
	borderRadius: 18,
	width:290,

  },
  btntext: {
    textAlign: 'center',
        color: '#d1175b',
        fontSize: 20,
        fontWeight: '500'
  },
	
	
createAccount: {
        width: 280,
        marginTop: 60,
	 	flexDirection:"row",
	 	justifyContent:'center',
	    backgroundColor: 'transparent',
    },
	
})
