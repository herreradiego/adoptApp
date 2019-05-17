import React,{Frament, Component} from 'react'
import {Link} from 'react-router-dom'
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton, TwitterLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { SocialIcon } from 'react-social-icons';
import { slide as Menu } from 'react-burger-menu'

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
        <div className="login-main">
        <header className="bar-nav-mob">
        <span className="nav-bar-logo">
            Adoptar<span className="nav-bar-logo-app-color">App</span>
            <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        </span>

        </header>

        </div>
        
        )
}



/*<span><img className="login-img"src="https://i.pinimg.com/originals/0a/e1/5e/0ae15e66f2be1672974f3e3d86c52e86.png"/></span>*/


}

export default Login