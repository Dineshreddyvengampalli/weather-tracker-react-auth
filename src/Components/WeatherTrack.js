import {List,ListItemButton,Box,Card,Typography,CardContent} from '@mui/material'
import {useState} from 'react'
import axios from 'axios'
import DisplayWeather from './DisplayWeather'

let WeatherTrack = ()=>{
  const [data,setData] = useState([])
  let clickHandler = async(event)=>{
    let city = event.target.id
    if(city === 'chennai'){
      let res = await axios.get('https://api.openweathermap.org/data/2.5/weather',{params:{
        appid : staticData.apikey,
        lat : staticData.locations.chennai.lat,
        lon : staticData.locations.chennai.long
        }
    })
    let temp = res.data.main.temp - 273.15
    setData(temp)
    console.log(data)

    }
   
  }
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
    return(
      <Box>
        <List>

          <ListItemButton  id='chennai' onClick={clickHandler}>chennai</ListItemButton>


        </List>
        <DisplayWeather temperature = {data} />
      </Box>
    )
      
        

}

export default WeatherTrack