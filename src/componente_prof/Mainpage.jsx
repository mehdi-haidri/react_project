import React from 'react'
import Contente from './Contente'
import Navebar from './Navebar'
import Sidebar from './sidebar'

import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'

function Mainpage() {
  return (
    <>
      
    <Navebar/>
  <div className='container1'>
      
      <Sidebar />
        <Switch>
          <Route exact path='/mainpage/prof'>
          </Route>
          <Route  path = '/mainpage/prof/Home'>
              <Contente/>
          </Route>
        </Switch>
   
      
    </div>
  </>
  )
}

export default Mainpage