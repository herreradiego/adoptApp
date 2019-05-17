import React,{Frament, Component} from 'react'
import {Link} from 'react-router-dom'


class Login extends Component{
    constructor(props){
        super(props)

    this.manageLogin = this.manageLogin.bind(this)
    }

    manageLogin(){
        fetch('http://localhost:3008/auth/facebook/').then(resp=>{
           return resp.json()
        }).then(data=>{
            console.log("DATA DE LOGIN: ",data)
        })
    }




render(){
    return(
        <Link to='/auth/facebook/'><button onClick={this.manageLogin}>Loguearme</button></Link>
        )
}


}

export default Login