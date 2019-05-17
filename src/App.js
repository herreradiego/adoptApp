import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchForm from './SearchForm'
import Search from './Search'
import Login from './Login'
import {fbdb, auth} from './firebase_config.js'



/*Components*/
import Home from './Home' 

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
fbdb.ref('/users')
class App extends Component {

  constructor(props){
    super(props)
    this.state={
      userInfo:{
        isAuthed:false,
        name:''
      }
    }

  this.loginUpdate = this.loginUpdate.bind(this)
  }

  loginUpdate = (userData)=>{
    console.log("Llego :",userData)

    fbdb.ref('/users/',).set( {[userData.uid]:{id:userData.uid,displayName: userData.displayName,
      email: userData.email,
      photoURL: userData.photoURL}})

      this.setState=({
        userInfo:
          {
            id:userData.uid,
            displayName: userData.displayName,
            email: userData.email,
            photoURL: userData.photoURL}
        }
      )

//SI EXISTE
      const myRef = fbdb.ref(`/users/${userData.uid}`).once("value").then(data => {
        if(data.val() !== null){
           console.log(data.val());
        }
      });
      console.log("MI REFERENFIAC: ",myRef)
/*
    fbdb.ref('users').once('value').then(function(snapshot) {
      // 2. Add new user to DB if they don't already exist
      if (snapshot.val() === null) {
        
          // This data is automatically pulled from Google when you auth
          userData = {
              displayName: userData.displayName,
              email: userData.email,
              photoURL: userData.photoURL
          };
          // 3. Save user data
          fbdb.ref('users/' + userData.uid).child().set({
            displayName: userData.displayName,
            email: userData.email,
            photoURL: userData.photoURL
        }).then(function() {
              console.log('User data saved!');
          }).catch(function(error) {
              console.log(error);
          })}
        else {
          console.log('User details already added!');
      }})
  .catch(function(error) {
      console.log(error);
  });
  
  
    this.setState({
      userInfo:{
        id:userData.uid,
        isAuthed:true,
        name:"userData.displayName"
      }
    
    
    })
    
*/
  }

  render() {
    return (
      <Router>
      <Switch>
        <Route 
        
        render={(props) => <Login {...props} isAuthed={this.state.userInfo.isAuthed}
        loginUpdate={this.loginUpdate} />}/>
        <Route exact path="/SearchForm" component={SearchForm}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
      </Router>
    );
  }
}

export default App;


