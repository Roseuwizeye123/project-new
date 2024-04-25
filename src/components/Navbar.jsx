import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div>
        
        <nav className='flex flex-col'>
            <Link to="/">Home</Link>
    
        
            <Link to="/about">About</Link>

        
            <Link to="/contact">Contact</Link>
      
        </nav>
      </div>
    </>
  )
}

export default Navbar
