import {useState,useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import {useParams} from 'react-router-dom'
import {Box,Typography} from '@mui/material'

let Calender = ()=>{
    const [calData,setCalData] = useState([])
    let params = useParams()
    let city  = params.location
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
    let getData = async ()=>{
        let date = new Date()
        let daysInMonth = moment(date).daysInMonth()
        let currentDate = date.getDate()
        let daysRemaining = daysInMonth - currentDate
        let res = await await axios.get('https://pro.openweathermap.org/data/2.5/forecast/climate',{params:{
            appid : 'b1b15e88fa797225412429c1c50c122a1',
            lat : staticData.locations[city]['lat'],
            lon : staticData.locations[city]['long'],
            cnt : daysRemaining
            }
        })
        let data = await res.data.list
        setCalData(data)
        console.log(data)
        
    }
    useEffect(()=>{
        getData()
    },[])

    return(
        <Box sx={{
            width: "40rem",
            height: "auto",
            bgcolor: "#d3d6d8",
            display: "flex",
            flexWrap: "wrap",
            margin: "auto",
          }}>
            {calData.map((eachData)=>(
                <Box sx={{
                    width: "87.4px",
                    height: "7rem",
                    bgcolor: "lightblue",
                    border: "2px solid black",
                  }}
      >{Math.round((eachData.temp.day)-273)}°C</Box>
            ))}
        </Box>
    )

}

export default Calender