import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TouchableOpacity,
  TextInput,Image,Button,KeyboardAvoidingView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebaseApp from './Firebase';
import Expo from 'expo';

export default class Login extends Component{
  constructor() {
    super()
    this.state = {
      email: '',
      pass: '',
	  users:[],
	  fbname:"",
	  fbpic:""
    }
  }
_login() {
  firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  });
}
	
componentWillMount() {
      // Add listener here
      this.unsubscribe = firebaseApp.auth().onAuthStateChanged(user => {
        if (user) {
          Actions.Home(user)
        }
      });
  }
  componentWillUnmount() {
      // Add listener here
this.unsubscribe()
  }
	
	
async signInWithGoogleAsync() {
  try {
    const result = await Expo.Google.logInAsync({
       iosClientId: "969782235330-famptcns1v93m4jq3shin99ibafl8hme.apps.googleusercontent.com",
       scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
	  Actions.Home();
      return result.accessToken;
	    
	
    } else {
      return {cancelled: true};
    }
  } catch(e) {
    return {error: true};
  };
  
this.props.pushPic(this.state.fbpic);
this.props.pushEmail(this.state.email);	

}
	
fbLogin(){
		Expo.Facebook.logInWithReadPermissionsAsync('189698421601699', {
			permission:['public_profile','email'],
			behavior:'web'
		}).then((resp)=>{
			fetch("https://graph.facebook.com/me?fields=name,email,picture.height(50)&access_token="+resp.token)
			.then((resp) => {
					return resp.json();
			 }).then((json) => {
					this.setState({
						fbname:json.name,
						fbpic:json.picture.data.url,
						email:json.email
					});
					Actions.Home();
				});
		});
	
	this.props.pushName(this.state.fbname);
	this.props.pushPic(this.state.fbpic);
	this.props.pushEmail(this.state.email);
};
	
  render() {
	  console.log(this.state.email + this.state.fbpic)
    return (
      <View style={styles.container}>
		
		 <View style={styles.gradientContainer}>
                <Image style={styles.gradient} source={require('./images/bg.png')}
                />
         </View>
		
		<View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('./images/logo.png')}
                />
        </View>
		
												 
		<View style={styles.inputWrapper}>
				<Image style={styles.inlineImg} source={require('./images/username.png')}
                />
			    <TextInput
					onChangeText={(email)=> this.state.email = email}
					style={styles.login}
					placeholder="Email"
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
					placeholder="Password"
					secureTextEntry = {true}
					placeholderTextColor='white'
				/>
		</View>	
					
		<TouchableOpacity style={styles.button} onPress={this._login.bind(this)}>
              <Text style={styles.btntext}>
                Login
              </Text>
        </TouchableOpacity>
			
			  
			  
         <View style={styles.textWrapper}> 
          	<View style={styles.lines}></View>
		  		<Text style={styles.textOr}>OR</Text>
		  	<View style={styles.lines}></View>
         </View>
		
		<View  style={styles.imgWrapper}>
			<TouchableOpacity onPress={this.fbLogin.bind(this)}>	
				<Image style={styles.socialicon} source={require('./images/facebook.png')}
				/>
			</TouchableOpacity>

			<TouchableOpacity onPress={this.signInWithGoogleAsync.bind(this)}>					
				<Image style={styles.socialicon} source={require('./images/google.png')}
				/>
			</TouchableOpacity>													

			 </View>
			<View style={styles.createAccount}>								
					   <Text style={{color:"white", top:11}}>Don't have an account? </Text>
					   <Button title="Sign up"  color="white" onPress={Actions.Register} />
				 
			</View>
		
	</View>
    )
  }
}


const styles = StyleSheet.create({
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
	
inputWrapper: {
		marginTop: 70,
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
	
	
 textWrapper: {
        width: 280,
        marginTop: 30,
	 	flexDirection:"row",
	 	justifyContent:'space-between',
    },
	
lines:{
	 height: 1,
	 width:100,
     borderWidth: 0.75,
	 top:10,
     borderTopColor: 'transparent',
     borderRightColor: 'transparent',
     borderBottomColor: '#FFFFFF',
     borderLeftColor: 'transparent',
},

textOr: {	
		color: '#FFFFFF',
        fontSize: 16,
        backgroundColor: 'transparent',
 },	
	
imgWrapper: {
        width: 130,
        marginTop: 20,
	 	flexDirection:"row",
	 	justifyContent:'space-between',
    },

socialicon:{
		width:50,
		height:50,
},	
	
createAccount: {
        width: 280,
        marginTop: 40,
	 	flexDirection:"row",
	 	justifyContent:'center',
	    backgroundColor: 'transparent',
    },
	
  reg: {
    justifyContent:'center',
    alignItems: 'center',
    flex:1,
    textAlign: 'right'
  }
})
