import {Stack,List,ListItemButton,ListItem} from '@mui/material'

let MainBody = ()=>{
    return(
        <div>
            <Stack direction='row'>
                <List>
                    <ListItemButton >Chennai</ListItemButton>
                    <ListItemButton>Banglore</ListItemButton>
                </List>
            </Stack>

        </div>
        
    )

}

export default MainBody