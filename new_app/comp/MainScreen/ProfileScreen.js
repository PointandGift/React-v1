import React from 'react';
import {
  StyleSheet,Text,View,
  TouchableOpacity,Image,Button  
} from 'react-native';

import {Actions} from 'react-native-router-flux'
import firebaseApp from '../../auth/Firebase'

export default class ProfileScreen extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  _signout(){
    firebaseApp.auth().signOut().then(function() {
      // Sign-out successful.
      Actions.pop()
    }, function(error) {
      // An error happened.
    });
  }
  render() {
	  firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.emailVerified);
      }
    });
    return (
        
        
        <View style={styles.container}>
          {/*Use a View not an image*/}
            <Image style={styles.profileImage} source={require('./images/profile_image.png')}
            />
            
            <Text style={styles.userName}>
                Cloris
            </Text>
            
            
            <View style={styles.infoContainer01}>
                <Text style={styles.titleDisplayName}>
                    <Text style={styles.display}>Display Name</Text>{"\n"}
                    Cloris
                </Text>
                
                {/*Use a text input for this section*/}
                <Text style={styles.line}> 
                    ───────────────────────────
                </Text>    
                    
                <Text style={styles.titleLocation}>
                    <Text style={styles.location}>Location</Text>{"\n"}
                    Vancouver
                </Text>
            </View>
                  
                    
            <View style={styles.infoContainer02}>
                <Text style={styles.notification}>
                    Notification
                </Text>
            </View>
            
                
            <Button title="Sign Out"  color="#d1175b" onPress={this._signout.bind(this)} />
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e7e8'
    },
    profileImage: {
        alignSelf: 'center',
        marginTop: 35
    },
    userName: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20
    },
    infoContainer01: {
        marginTop: 40,
        padding: 20,
        backgroundColor: '#FFFFFF'
    },
    display: {
        color: '#808080'
    },
    line: {
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8,
        fontWeight: '200',
        backgroundColor: 'transparent'
    },
    location: {
        color: '#808080'
    },
    infoContainer02: {
        marginTop: 40,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    notification: {
        color: '#808080'
    },
   
});