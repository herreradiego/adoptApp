import React,{Fragment, Component} from 'react'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {Link} from 'react-router-dom'
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton, TwitterLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { SocialIcon } from 'react-social-icons';
import { slide as Menu } from 'react-burger-menu'
import {loginWithFacebook, db} from './firebase_config.js'
import logoImg from './adoptarApp_logo.png'
import {Navbar, NavItem, Button, Icon } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

import ('./Login.css');

  







class Login extends Component{
    
    constructor(props){
        super(props)
   this.state = {
    userInfo:{
        isAuthed:false,
        name:''
       }
   }
    this.manageLogin = this.manageLogin.bind(this)
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    manageLogin = (selection,event) =>{
        console.log("value : ",selection)
        const setupData =async ()=>{
            const userData = await loginWithFacebook()
            this.setState({
                userInfo:{
                    isAuthed:true,
                    name:userData.displayName,
                    flow:"caregiver"
                }
            },()=>{
                /*fbdb.ref('/users/' + user.uid).once('value').then(function(snapshot) {
                    // 2. Add new user to DB if they don't already exist
                    if (snapshot.val() === null) {
                        // This data is automatically pulled from Google when you auth
                        userData = {
                            displayName: user.displayName,
                            email: user.email,
                            photoURL: user.photoURL
                        };
                        // 3. Save user data
                        fbdb.ref('users/' + user.uid).set(userData).then(function() {
                            console.log('User data saved!');
                        }).catch(function(error) {
                            console.log(error);
                        });
                    } else {
                        console.log('User details already added!');
                    }
                }).catch(function(error) {
                    console.log(error);
                });*/
            }
            
            )
            this.props.loginUpdate(userData)

            

        }

        
        
        return setupData()
        /*props.loginUpdate()
        switch(selection) {
            case 'Facebook':
              return handleFacebookAuth()
            default:
              return 'Facebook';
          }
        
          handleFacebookAuth = ()=>{
        
            loginWithFacebook();
            
        }    
        
        e.preventDefault();
        loginWithFacebook()*/
    };


handleClick() {
    this.setState({
        open: !this.state.open
    });
}


   

render(){
 
    return(

            <div className="main-contanier">
                
                <Navbar className="navbar" edge="right" centerLogo brand={<a><img src={logoImg}/>AdoptarApp</a>} alignLinks="right">
                <Button node="a">
                    Buscar Mascota
                </Button>
                <Button node="a">
                Donar
                </Button>
                <Button node="a">
                Acerca de AdoptApp
                </Button>
                

                </Navbar>
                {this.state.userInfo.isAuthed ? <WelcomeMsg userInfo={this.state.userInfo} flow={this.state.userInfo.flow} />:

                    <div className="social">
                        <h6 className="social-title">Por favor, regístrese o ingrese para continuar</h6>
                        <div className="login-container">
                            <p>Seleccione su red social favorita</p>
                            <button className="facebook-btn" onClick={(event) => {this.manageLogin('Facebook', event)}}>Facebook</button>
                            <button className="gootle-btn">Google</button>
                            <button className="twitter-btn">Twitter</button>
                        </div>
                    </div>
                }
                    
                
                
                
            </div>
      

        /*
              <div className="App">
                {this.state.isSignedIn ? (
                  <span>
                    <div>Signed In!</div>
                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                    <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                    <img
                      alt="profile picture"
                      src={firebase.auth().currentUser.photoURL}
                    />
                  </span>
                ) : (
                  <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                  />
                )}
              </div>
            )
          }*/
        /*
        <Fragment className="main-contanier">
    
            <Navbar className="navbar" edge="right" centerLogo brand={<a><img src={logoImg}/>AdoptarApp</a>} alignLinks="right">
            <Button node="a">
                Buscar Mascota
            </Button>
            <Button node="a">
            Donar
            </Button>
            <Button node="a">
            Acerca de AdoptApp
            </Button>
            

            </Navbar>
            <div className="social">
                <h6 className="social-title">Por favor, regístrese o ingrese para continuar</h6>
                <div className="login-container">
                    <p>Seleccione su red social favorita</p>
                    <button className="facebook-btn" >Facebook</button>
                    <button className="gootle-btn">Google</button>
                    <button className="twitter-btn">Twitter</button>

                </div>
            </div>
        </Fragment>*/
        )
    }

}

class SignInGoogleBase extends Component {
    constructor(props) {
      super(props);
  
      this.state = { error: null };
    }
  
    onSubmit = e =>{
        e.preventDefault();
        loginWithFacebook()
    };
    

  
    render() {
      const { error } = this.state;
  
      return (
        <form onSubmit={this.onSubmit}>
          <button type="submit">Sign In with Google</button>
  
          {error && <p>{error.message}</p>}
        </form>
      );
    }
  }


const WelcomeMsg = (props)=>{
    const formFlow = props.flow
    if(props.flow=='caregiver'){
        return (
            <div>
            <h5>Ya falta poco, {props.userInfo.name}</h5>
            <h6>Por Favor completa los siguientes datos para configurar tu cuenta:</h6>
            <FormCaregiver/>
        </div>
        )
    }
}


const FormCaregiver = (props)=>{
    return(
        <div className="input-field col s8">
    <select className="browser-default">
    <option value="" disabled selected>Elige la ciudad donde esta la mascota</option>
    <option value="1">Cordoba</option>Algun numero de telèfono donde la gente te pueda contactar
    <option value="2">Rosario</option>
    <option value="3">CABA</option>
  </select>  
  <div className="input-field col s6">
    
          <input id="last_name" type="text" className="validate"/>
          <label for="last_name">Ingrese un teléfono para ser contactado:</label>
    </div>
    <h6>¿Vas a Recibir donaciones por Mercado Pago?</h6>
    <div className="input-field col s6">
       
        <input id="link_mp" type="text" className="center-align validate"/>    
            <label for="link_mp">Pega acá el link de Mercado Pago</label>
            <a className="waves-effect waves-light btn-large center-align">Siguiente</a>
</div></div>
        
          

    )
}


  export default Login;
