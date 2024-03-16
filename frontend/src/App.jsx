import React from 'react'
import Edit from './Components/Edit'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Create from './Components/Create'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/client/:id' element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App