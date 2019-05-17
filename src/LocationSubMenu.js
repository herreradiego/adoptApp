import React,{Component} from 'react'
import {Select, FormControl,InputLabel,TextField,MenuItem } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Row, Button} from '@material-ui/core/'

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


class LocationSubMenu extends Component{
    constructor(props){
        super(props)
        this.state={}   
    }

    render(){
        const menuItems = this.props.items
        const { classes } = this.props;
        console.log("menuItems",menuItems)
        return(

            
            <FormControl fullWidth={true}>
            
            <InputLabel xs={12}>Localidad</InputLabel>
            {menuItems ? <Select xs={12} autoWidth="true" className={classes.Select}
                value={menuItems}
                onChange={(e)=>{this.handleChange('Localidad',e)}}
            >
                {menuItems.map(item=>{
                    return(
                        <MenuItem value={item.id}>{item.nombre}</MenuItem>
                        )
                })}
            </Select> : null}
            
        </FormControl>
        )
    }
}




export default withStyles(styles)(LocationSubMenu)