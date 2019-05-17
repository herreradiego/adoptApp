import React, {Component, Fragment} from 'react';
import {Select, FormControl,InputLabel,TextField,MenuItem } from '@material-ui/core/';
import PropTypes from 'prop-types';
import LocationSubMenu from './LocationSubMenu'
import {Grid, Row, Button} from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Input from '@material-ui/core/Input/Input';

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
        width:500,
        border:'solid 0.5px black',
        borderRadius:'5px',
        padding:10

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
  

class SearchForm extends Component{
    constructor(props){
        super(props)
        this.state={
            especies:'',
            gender:'',
            ageRank:'',
            allLocations:'',
            selectedLocation:'',
            selected:false,
        
        }

        this.handleChange = this.handleChange.bind(this)

    }

    

    componentDidMount(){
        fetch('http://localhost:3008/provincias').then(resp=>{
            return resp.json()
        }).then(data=>{
            console.log(data)
            this.setState({
                
                    allLocations:data
                
            })
            
        })
    }
    
       

    handleChange(name,event){
            event.preventDefault();
            if(name == 'SelectedProvincia'){
            console.log("SelectedProvinciaid: ",event)
                const getDep = async () =>{
                    
                    const selectedLocation = event.target.value
                    const data = await fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${event.target.value}&campos=id,nombre&max=100`)
                    let departamentos = await data.json()
                    departamentos = departamentos.municipios
                    let myDeps = []
                    departamentos.map(item=>{
                        myDeps.push(item)
                    })

                    this.setState({
                        
                            selectedLocation:selectedLocation,
                            subLocations:myDeps,
                            selected:true,
                            
                            
                        },()=>{
                            this.setState({
                                dataLoaded:true
                            })
                        }
                        
                    )
                    console.log("data localization",this.state.allLocations)
                }
                getDep()

            }

         const propName = name  
        console.log("CORRIO" ,event.target.value)
            this.setState({
              [propName]: event.target.value,
            });
            
          };

          getGeoData(){
              let cities=''
            console.log("cities")
              fetch('https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.2/download/provincias.json').then(
                  (resp)=>{return resp.json()}).then((dataJson)=>{
                    cities = dataJson.map(item=>{
                        return item
                    })          
                
                    //console.log(cities)    
        
                  })  
                  
          }

          handleFormSubmit(e){
              console.log("FOMR SUBMIT ",e)
            const busqueda = {
                species:'',
                ageRank:'',
                gender:'',
                location:{
                    city:'',
                    subLocation:''
                }

            }



          }

          
          
    
    


    render(){
        const { classes } = this.props;
        const selectOptions = this.state.allLocations
        const selectedLocation = this.state.selectedLocation
        const dataLoaded = this.state.data
        
        console.log("SELECTED ITEM: ",selectedLocation)



/*

        <FormControl fullWidth={true}>
                            <InputLabel>Sexo</InputLabel>
                                <Select autoWidth="true" className={classes.Select}
                                        value={this.state.species}
                                        onChange={(e)=>{this.handleChange('species',e)}}
                                        
                                >  
                                    <MenuItem value={'Gatos'}>Gatos</MenuItem>
                                    <MenuItem value={'Perros'}>Perros</MenuItem>
                                    <MenuItem value={'Unicornios'}>Unicornios</MenuItem>
                                </Select>
                        </FormControl>    
    
            */
        
        return(
        <div className={classes.mainContainer}>
            <div className={classes.formContanier} xs={6}>
                 <form onSubmit={this.handleSubmit} autoComplete="off">
                    <div item xs={12}>
                        <FormControl fullWidth={true}>
                            <InputLabel>Sexo</InputLabel>
                            <Select autoWidth="true" 
                                value={this.state.gender}
                                onChange={(e)=>{this.handleChange('gender',e)}}
                            >
                                <MenuItem value={'Macho'}>Macho</MenuItem>
                                <MenuItem value={'Hembra'}>Hembra</MenuItem>
                            </Select>
                        </FormControl>    
                    </div>
                    <div item xs={12}>
                        <FormControl fullWidth={true}>
                            <InputLabel shrink={true}>Test</InputLabel>
                            <Select autoWidth="true" 
                                value={this.state.species}
                                onChange={(e)=>{this.handleChange('species',e)}}
                            >
                                <MenuItem value={'Gatos'}>Gatos</MenuItem>
                                <MenuItem value={'Perros'}>Perros</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div item xs={12}>
                        <FormControl fullWidth={true}>
                        <InputLabel xs={12}>Rango de Edad</InputLabel>
                        <Select xs={12} autoWidth="true" className={classes.Select}
                            value={this.state.ageRank}
                            onChange={(e)=>{this.handleChange('ageRank',e)}}
                        >
                            <MenuItem value={'Cachorro'}>Cachorro</MenuItem>
                            <MenuItem value={'Joven'}>Joven</MenuItem>
                            <MenuItem value={'Adulto'}> Adulto</MenuItem>
                        </Select>
                            
                        </FormControl>    
                    </div>
                    <div item xs={12}>
                        <FormControl fullWidth={true}>
                            <InputLabel xs={12}>Provincia</InputLabel>
                            <Select xs={12} autoWidth="true" className={classes.Select}
                                value={selectedLocation}
                                onChange={(e)=>{console.log("E: ",e);this.handleChange('SelectedProvincia',e)}}
                            
                                
                            >
                                {selectOptions ? selectOptions.map(item=>{
                                    return(
                                        <MenuItem  key={item.id} value={item.nombre} >{item.nombre}</MenuItem>
                                        )
                                }):null}
                            </Select>
                            
                        </FormControl>
                            
                               
                          
                    </div>
                    <Link to='/'>
                        <Button onClick={this.getGeoData}fullWidth={true} variant="outlined" color="primary">
                        Anterior
                        </Button>
                    </Link>
                    <Link to='/search'> 
                        <Button type='submit' fullWidth={true} variant="outlined" color="primary">
                        Buscar
                        </Button>
                    </Link>
                </form>
            </div>
            
        </div>
        )
    }
}

SearchForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SearchForm);



/*
BACKUP

<div className={classes.mainContainer}>
            <Grid className={classes.formContanier} container xs={6}>
                 <form className={classes.form}autoComplete="off">
                    <Grid item xs={12}>
                        <FormControl fullWidth={true}>
                                <InputLabel htmlFor="species" xs={12}>Especie</InputLabel>
                                <Select xs={12} autoWidth="true" className={classes.Select}
                                        value={this.state.especies}
                                        onChange={(e)=>{this.handleChange('especies',e)}}
                                >
                                    <MenuItem value={'Gatos'}>Gatos</MenuItem>
                                    <MenuItem value={'Perros'}>Perros</MenuItem>
                                    <MenuItem value={'Unicornios'}>Unicornios</MenuItem>
                                </Select>
                        </FormControl>    
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth={true}>
                            <InputLabel>Sexo</InputLabel>
                            <Select autoWidth="true" 
                                value={this.state.gender}
                                onChange={(e)=>{this.handleChange('gender',e)}}
                            >
                                <MenuItem value={'Macho'}>Macho</MenuItem>
                                <MenuItem value={'Hembra'}>Hembra</MenuItem>
                            </Select>
                        </FormControl>    
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth={true}>
                        <InputLabel xs={12}>Rango de Edad</InputLabel>
                        <Select xs={12} autoWidth="true" className={classes.Select}
                            value={this.state.ageRank}
                            onChange={(e)=>{this.handleChange('ageRank',e)}}
                        >
                            <MenuItem value={'Cachorro'}>Cachorro</MenuItem>
                            <MenuItem value={'Joven'}>Joven</MenuItem>
                            <MenuItem value={'Adulto'}> Adulto</MenuItem>
                        </Select>
                            
                        </FormControl>    
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth={true}>
                                <TextField
                                    
                                    label="Ciudad"
                                />
                        </FormControl> 
                    </Grid>
                    <Button fullWidth={true} variant="outlined" color="primary">
                    Buscar
                    </Button>
                </form>
            </Grid>
            <h1>{this.state.species}</h1>
        </div>
 <LocationSubMenu items={this.state.selectItems}/>
*/