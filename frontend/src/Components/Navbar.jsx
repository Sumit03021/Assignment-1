import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <div className='navbar'>
        <h2 className='nav-brand'>Clients Panel</h2>
        <h4 className='nav-other'><Link style={{textDecoration:"none", color:"grey"}} to='/home'>Clients</Link></h4>
        <h4 className='nav-other'><Link style={{textDecoration:"none", color:"grey"}} to='/'>Create</Link></h4>
      </div>
  )
}

export default Navbar