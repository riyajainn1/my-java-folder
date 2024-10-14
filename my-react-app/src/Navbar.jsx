import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
     <Link to='/'>
      <li>Home</li>
      </Link>
      <Link to='/About'>
      <li>About</li>
      </Link>
      {/* <Link to='/Contact'>
      <li>Contact</li>
      </Link> */}
     <Link to='/Login'>
      <li>Login</li>
      </Link>
      <Link to='/Cart'>
      <li>Cart</li>
      </Link>
      
      </nav>

    </div>
  )
}

export default Navbar
