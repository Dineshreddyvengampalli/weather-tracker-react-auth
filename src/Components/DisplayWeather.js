import{Box,Card,CardHeader,CardContent, Typography} from '@mui/material'

let DisplayWeather = (props)=>{
    return(
        <div>
            <Box>
                <Card variant='outlined' >
                    <CardContent>
                        <Typography>{props.temperature}</Typography>
                    </CardContent>
                </Card>
            </Box>
            
        </div>
    )

}

export default DisplayWeather