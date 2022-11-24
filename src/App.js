import './App.css';

import NavBar from './Components/NavBar'
import MainBody from './Components/MainBody'
import Calender from './Components/Calender';

import {Route,Routes,BrowserRouter} from 'react-router-dom'
import {Fragment} from 'react'
import ReactGa from 'react-ga'
import Test from './Components/Test'

ReactGa.initialize('UA-250102415-3')


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/calender/:location' element = {<Calender></Calender>}></Route>
          <Route path='/' element = {<Fragment>
            <NavBar></NavBar>
            <MainBody></MainBody>
          </Fragment>}></Route>
          <Route path='/simple' element = {<Fragment>
           <Test></Test>
          </Fragment>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
