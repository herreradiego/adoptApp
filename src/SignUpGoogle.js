import React,{Fragment, Component} from 'react'
import firebase from './firebase_config.js'




class SignUpGoogle extends Component{
    constructor(props){
        super(props);

        this.state = {error:null}
    }

    onSubmit = event =>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            console.log(result.credential.accessToken)
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
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

    render(){
        return(
            <form onSubmit={this.onSubmit}>
            <button type="submit">Sign In with Google</button>
            {error && <p>{error.message}</p>}
          </form>
        )
    }
    
}





  export {SignInGoogle}
