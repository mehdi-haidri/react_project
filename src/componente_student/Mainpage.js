import React from 'react';
import Sidebar from './sidebar';
import Contente from './Contente';
import { Outlet } from 'react-router-dom';
import Navebar from './Navebar';
import '../App.css';
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