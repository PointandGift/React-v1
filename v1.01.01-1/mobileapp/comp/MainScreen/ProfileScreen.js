import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class ProfileScreen extends React.Component {
  render() {
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
            
                
            <Text style={styles.signout}>
                Sign out
            </Text>
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
    signout: {
        textAlign: 'center',
        marginTop: 40,
        color: '#d1175b',
        fontSize: 20,
    }
});