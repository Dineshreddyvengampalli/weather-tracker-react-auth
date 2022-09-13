import {List,ListItemButton,Card,CardContent,Typography} from '@mui/material'
import Forecast from './Forecast'
import { Box } from '@mui/system'
import {useState} from 'react'
import axios from 'axios'
import moment from 'moment'

let MainBody = ()=>{
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
    let predictHandler = async()=>{
        let date = new Date()
        let daysInMonth = moment(date).daysInMonth()
        let currentDate = date.getDate()
        let daysRemaining = daysInMonth - currentDate
        console.log(daysRemaining)

    let dayData = await axios.get('https://pro.openweathermap.org/data/2.5/forecast/climate',{params:{
        appid : 'b1b15e88fa797225412429c1c50c122a1',
        lat : staticData.locations.chennai.lat,
        lon : staticData.locations.chennai.long,
        cnt : daysRemaining
        }
    })
    let resData = await dayData.data.list
    setdData(resData)
    console.log(dData)
        
    }
    const [data,setData] = useState([])
    const [city,setCity] = useState('')
    const [dData,setdData] = useState([])
  let clickHandler = async(event)=>{
    let location = event.target.id
    console.log(location)
    setCity(location.toUpperCase())
    let res = await axios.get('https://api.openweathermap.org/data/2.5/weather',{params:{
        appid : staticData.apikey,
        lat : staticData.locations[location]['lat'],
        lon : staticData.locations[location]['long']
        }
    })
    let data = await res.data.main.temp - 273.15
    console.log(data)
    setData(data)
  }
    
    return( 
        <div>
            <Box direction='row' spacing='10px' display='flex'bgcolor='#ADD8E6' borderRadius='10px'>
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
                    <button onClick={predictHandler}>Show predicted data</button>
                    <Forecast item = {dData}></Forecast>
                   
                </Box>

            </Box>
            
        </div>
        
    )

}

export default MainBody