import React,{Frament, Component} from 'react'
import {Link} from 'react-router-dom'
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton, TwitterLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { SocialIcon } from 'react-social-icons';


import {Navbar} from 'react-materialize';


import ('./Login.css')



class Login extends Component{
    
    constructor(props){
        super(props)
   
    this.manageLogin = this.manageLogin.bind(this)
    }

    manageLogin(){

    }


   

render(){
 
    return(
        
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Componentssssss</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
        
  );
        
        
}
}



/*<span><img className="login-img"src="https://i.pinimg.com/originals/0a/e1/5e/0ae15e66f2be1672974f3e3d86c52e86.png"/></span>*/


  export default Login;
