import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Befit from './pages/Befit'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Registration' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/befit' element={<Befit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App