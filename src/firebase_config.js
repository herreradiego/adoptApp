import * as firebase from 'firebase'
//import app from 'firebase/app';
require('firebase/auth');

const config = {
  apiKey: "AIzaSyC35WzazWRjhJAAQUn6CzWqmdiagqWngS4",
    authDomain: "mylogin-36044.firebaseapp.com",
    databaseURL: "https://mylogin-36044.firebaseio.com",
    projectId: "mylogin-36044",
    storageBucket: "mylogin-36044.appspot.com",
    messagingSenderId: "753062681324"
};



firebase.initializeApp(config)

const loginWithFacebook = ()=>{
  var provider = new firebase.auth.FacebookAuthProvider;
  console.log("HELLO THERE :")
       return firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            console.log("result.credential.accessToken")
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("HELLO THERE :",user.displayName )
            return user;// ...
          },function(user){
            console.log("TEST: ",user)
            return user
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
}


const loginWithGoogle = ()=>{}
const fbdb = firebase.database()
const auth = firebase.auth()



export {loginWithFacebook,fbdb,auth};
  



  
    // *** Auth API ***
  
   /* 
   
     class firebase {
    constructor() {
    
      const app = firebase.initializeApp(config);
      this.auth = app.auth();
      this.db = app.database();
      this.googleProvider = new app.auth.GoogleAuthProvider();
    }
   
   
   doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);*/
  
 
   
  