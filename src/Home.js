import React, {Component, Fragment} from 'react';


/*
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import {FormControl, InputLabel, Select,MenuItem, Checkbox} from '@material-ui/core/'
import imageHeader from './images/mainBckg.jpg'
import SearchForm from './SearchForm'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/*
pink:#F41F6A
green:4DC17A

*/ 
const styles = {
    container:{
        display: 'grid'
    },
    mainTitle:{
        color:"white",
        fontSize:"2rem",
        textAlign:"center",
        fontWeight:"bold",
        alignSelf: 'center',
    },
    mainInputTitle:{
        fontSize:'18px'
    },
    container:{
    },
    myheader:{
        position: 'relative',
        zIndex: '1',
        position:'relative',
        width:'100vw',
        height:'100vh',    
    },
    headerContainer: {
        position: 'absolute',
        zIndex: '-1',
        width:'100vw',
        height:'100vh',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        /*backgroundImage:`url(${imageHeader})`,*/
        backgroundSize: 'cover',
        display: 'grid',
        "gridTemplateRows": "20% 20% 60%"
    },
    btnMain:{
        display: 'flex',
        alignItems: 'center',
        background:"none",
        border:"1px solid white",
        fontSize:"40px",
        padding:"20px",
        width:"350px",
        height:"300px",
        color:"white",
        textAlign:'center',
        verticalAlign: 'middle',
        '&:hover':{
            background:'white',
            color:'#ff1c6a'
        }
    },
    btnContainer:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyItems: 'center',
        width: '80%',
        margin: '0 auto',



    },
    logo:{
        color:"white",
        fontSize:"4rem",
        textAlign:"center",
        fontWeight:"bold",
        border: "0px",
        margin: "0px",
        "alignSelf": "flex-end",
        letterSpacing:'12px'
    }
   



        /*fontFamily: 'Roboto',
        fontFtyle: 'normal',
        fontWeight: 'bold',
        lineHight: 'normal',
        fontSize: '38px',
        textAlign: 'justify',
        letterSpacing: '0.1em'*/
    }


class Home extends Component{


    render(){
        return(
            <div>
                HOME
            </div>
        )
    }
/*




    render(){
        const {classes} = this.props;
        return(
            
            <Fragment>
                <div class={classes.container}>
                    <header class={classes.myheader}>
                        <div class={classes.headerContainer}>
                            <Typography class={classes.logo}>
                                ADOPTAR
                            </Typography> 
                            <Typography class={classes.mainTitle}>
                                TE AYUDAMOS A ENCONTRAR A TU PRÓXIMO MEJOR AMIGO :)
                            </Typography>
                        <div class={classes.btnContainer}>
                            <Link to='SearchForm'><a class={classes.btnMain} src="#">QUIERO ADOTAR UNA MASCOTA</a></Link>
                            <a class={classes.btnMain} src="#">QUIERO DAR UNA MASCOTA EN ADOPCION RESPONSABLE</a>
                        </div>
                        </div>
                    </header>   
                </div>
                
            
            </Fragment>
                
           
        )
    }*/


}


export default /*withStyles(styles)*/Home