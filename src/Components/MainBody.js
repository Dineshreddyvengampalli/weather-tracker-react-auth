import {List,ListItemButton,Card,CardContent,Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import { Box,Button } from '@mui/material'
import {useState} from 'react'
import axios from 'axios'
import './MainBody.css'
import ReactGa from 'react-ga'

let MainBody = ()=>{
  const [data,setData] = useState([])
  const [city,setCity] = useState('')
  let to = `calender/${city}`
  let staticData = {
        "apikey": "011eaabd1ac39453a6df9a064eb8befd",
        "locations": {
          "chittoor": {
            "lat": 13.21,
            "long": 79.1
          },
          "hyderabad": {
            "lat": 17.38,
            "long": 78.48
          },
          "chennai": {
            "lat": 13.08,
            "long": 80.27
          },
          "banglore": {
            "lat": 12.97,
            "long": 77.59
          },
          "tirupati": {
            "lat": 13.62,
            "long": 79.41
          },
          "kadapa": {
            "lat": 14.46,
            "long": 78.82
          },
          "vijayawada": {
            "lat": 16.5,
            "long": 80.64
          },
          "mumbai": {
            "lat": 16.5,
            "long": 80.64
          },
          "delhi": {
            "lat": 28.7,
            "long": 77.1
          }
        }
      }
  
  let clickHandler = async(event)=>{
    let location = event.target.id
    ReactGa.event({
      category : 'city-selection',
      action : `city selected : ${location}`
    })
    setCity(location)
    let res = await axios.get('https://api.openweathermap.org/data/2.5/weather',{params:{
        appid : staticData.apikey,
        lat : staticData.locations[location]['lat'],
        lon : staticData.locations[location]['long']
        }
    })
    let data = await res.data.main.temp - 273.15
    setData(data)
  }
    
    return( 
        <div className='container'>
            <Box direction='row' spacing='10px' display='flex'bgcolor='#ADD8E6' borderRadius='10px' padding='1%'>
                <Box>
                    <List>
                        <Typography variant='h5'> Locations: </Typography>
                        <ListItemButton id='chennai' onClick={clickHandler}>Chennai</ListItemButton>
                        <ListItemButton  id='banglore' onClick={clickHandler}>Banglore</ListItemButton>
                        <ListItemButton  id='hyderabad' onClick={clickHandler}>Hyderabad</ListItemButton>
                        <ListItemButton id='chittoor' onClick={clickHandler}>Chittoor</ListItemButton>
                        <ListItemButton id='delhi' onClick={clickHandler}>Delhi</ListItemButton>
                        <ListItemButton id='vijayawada' onClick={clickHandler}>Vijayawada</ListItemButton>
                        <ListItemButton id='kadapa' onClick={clickHandler}>kadapa</ListItemButton>
                        <ListItemButton id='tirupati' onClick={clickHandler}>Tirupati</ListItemButton>
                        <ListItemButton id='mumbai' onClick={clickHandler}>Mumbai</ListItemButton>
                    </List>

                </Box>
                <br>
                </br>                
                <Box maxWidth='500px'  marginLeft='250px' >
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography>selected city : {city}</Typography>
                            <Typography >Temperature:{Math.round(data)}°C</Typography>
                        </CardContent>
                    </Card>           
                </Box> 
                <Box>
                  <Link to ={to} >Check predictions</Link>
                <br></br>   
                <Link  to = '/simple'>Go to simple</Link>   
                </Box>      
            </Box>
            
        </div>
        
    )

}

export default MainBody