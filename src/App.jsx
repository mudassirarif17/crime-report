import React from 'react'
import MyState from './context/data/MyState';
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import CrimeReports from './Pages/CrimeReports'
import About from './Pages/About'
import Contact from './Pages/Contact'
import CrimeResponse from './Pages/CrimeResponse'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crime23 from './Pages/Crime23';

const App = () => {
  return (
    <MyState>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/sign-in' element={<Login />}/>
        <Route path='/crime-report' element={<CrimeReports/>}/>
        <Route path='/crime-response' element={<CrimeResponse/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/crime-23' element={<Crime23/>}/>
      </Routes>
    </BrowserRouter>
    </MyState>

  )
}

export default App
