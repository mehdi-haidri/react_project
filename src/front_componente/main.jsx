import React from 'react'
import './App.css';
import Mainpage_student from './componente_student/Mainpage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './front_componente/Login';
import SignUp from './front_componente/SignUp';
import Mainpage_prof from './componente_prof/Mainpage'

function main() {
  return (
      <div>
          <BrowserRouter>
       
       <Switch>
       <Route  exact path='/'>
             <Login/>
         </Route>
       <Route   path='/SignUp'>
             <SignUp/>
         </Route>
         <Route  path='/mainpage/student'>
             <Mainpage_student />
           </Route>
         <Route  path='/mainpage/prof'>
             <Mainpage_prof />
           </Route>
         </Switch>
       </BrowserRouter>
    </div>
  )
}

export default main