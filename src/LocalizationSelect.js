import React,{Fragment} from 'react'
import {Select, FormControl,InputLabel,TextField,MenuItem } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    mainContainer:{
       width:'100vw',
       height:'100vh',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
        
    },
    formContanier:{
        margin:'0 auto',
        width:400,
        border:'solid 0.5px black',
        borderRadius:'5px',
        padding:20

    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    select: {
      width:'200px'
    },
    form:{
        width:'100%'
    },
    
  });



const LocalizationSelect = (props)=>{
console.log("lista para imprimir",props.items)
const {classes}=props
return(
    <Fragment>
                            <InputLabel>Provincia</InputLabel>
                            <Select autoWidth="true" className={classes.Select}
                                
                                onChange={(e)=>{console.log("E: ",e);this.handleChange('SelectedProvincia',e)}}
                            
                                
                            >
                                {props.items ? props.items.map(item=>{
                                    return(
                                        <MenuItem  key={item.id} value={item.nombre} >{item.nombre}</MenuItem>
                                        )
                                }):null}
                            </Select>
    </Fragment>    
                        )
    

    }


export default withStyles(styles)(LocalizationSelect)

