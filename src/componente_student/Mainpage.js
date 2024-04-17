import React from 'react';
import Sidebar from './sidebar';
import Contente from './Contente';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navebar from './Navebar';
import '../App.css';
function Mainpage() {
  return (

    <>
      
      <Navebar/>
    <div className='container1'>
        
        <Sidebar />
          <Switch>
            <Route exact path='/mainpage/student'>
            </Route>
            <Route  path = '/mainpage/student/Home'>
                <Contente/>
            </Route>
          </Switch>
     
        
      </div>
    </>
      
  )
}

export default Mainpage