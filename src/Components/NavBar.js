import {AppBar,Toolbar,Button} from '@mui/material'
import logo from './logo.png'
import  './NavBar.css'
let NavBar = ()=>{
    return(
        <AppBar className='appbar' position="static">
            <Toolbar>
                <img src={logo} alt='logo' className='logo'></img>
                <h1 className='main-heading'>Track Your Weather</h1>
            </Toolbar>
           

        </AppBar>
    )
}
export default NavBar