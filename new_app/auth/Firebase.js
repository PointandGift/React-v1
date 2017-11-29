const firebase =  require('firebase')
var config = {
 	apiKey: "AIzaSyBPQ9IPjk5lmTmXQ9ErH44IpMhc0Fc0U34",
    authDomain: "auth-53082.firebaseapp.com",
    databaseURL: "https://auth-53082.firebaseio.com",
    projectId: "auth-53082",
    storageBucket: "auth-53082.appspot.com",
    messagingSenderId: "721291817735"
};
export default firebaseApp = firebase.initializeApp(config);
