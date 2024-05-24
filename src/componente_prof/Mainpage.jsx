import React from 'react'
// import Contente from './Contente'
import Navebar from './Navebar'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'

// import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'

function Mainpage() {
  return (
    <>
      
    <Navebar/>
  <div className='container1'>
      
        <Sidebar />

        <Outlet/>
        
   
      
    </div>
  </>
  )
}

export default Mainpage