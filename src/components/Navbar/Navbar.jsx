import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='nav'>
      <h1 className='title'>ShareSpace</h1>
      <div className= "btn-container">
        <Link to="/profile" className='btn'><button >Home</button></Link>
        <Link to="/activeusers" className='btn'><button >Active Users</button></Link>
      </div>
    </div>
  )
}
