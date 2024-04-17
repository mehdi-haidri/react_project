import React, { useState } from 'react'
import '../App.css';
import logo from '../assets/images/logo.jpg';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css'

function Navebar() {


  const handllogout = () => {
  
    const answer = window.confirm("are you sure");
    if (answer) {
      localStorage.clear();
      window.location.pathname = "/"
    }
 

}

  return (
    <div className='navebar'>
      <div className='profile_logo'>
        <div className='logo'>
           <img src={logo} alt=''></img>
         </div>
           <Profile />
      </div>
        
          <div className='list'>
              <ul>
                  <li>first</li> 
                  <li>second</li>
                  <li onClick={handllogout}>Log Out</li>
        </ul>
        <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
  <div className="bg-dark p-4">
    <h5 className="text-body-emphasis h4">Collapsed content</h5>
    <span className="text-body-secondary">Toggleable via the navbar brand.</span>
  </div>
</div>

          </div>
          
    </div>
  )
}

export default Navebar