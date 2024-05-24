import React from 'react'
import { Outlet } from 'react-router-dom';
import '../App.css';
import { AuthContextProvider } from '../context/context';

function Main() {
  return (
    <AuthContextProvider>
      <div className='App'>
        <Outlet/>
      </div>
    </AuthContextProvider>
  )
}

export default Main