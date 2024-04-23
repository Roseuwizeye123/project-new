import React from 'react'
import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom'

const Main =() => {
  return (
    <div>
    <div className='bg-pink-300 h-screen p-10 mb-70'>
    <div className=''>
    <div>
        <div className='bg-green-300 mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl md:p-9 p-70 rounded-lg mx-auto p-3'>
        <h3>Marie Rose</h3>
    </div>
    <div className='flex gap-10 mt-30'>
      <Navbar/>
      <div className='bg-orange-300 h-[76vh] w-full border-2 border-blue-600  flex-grow rounded-lg'>
     
      <Outlet/>
       </div></div></div>
    </div>
    </div>
    </div>
  )
}

export default Main

