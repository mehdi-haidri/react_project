
import Mainpage_student from './componente_student/Mainpage';
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './front_componente/Login';
import SignUp from './front_componente/SignUp';
import Mainpage_prof from './componente_prof/Mainpage'
import Main from './front_componente/main';
import Contente from './componente_student/Contente';
import Contente2 from './componente_prof/Contente';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main/>}>
      <Route index element={ <Login/>} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/mainpage/student' element={<Mainpage_student />}>
         <Route  path = '/mainpage/student/Home' element={ <Contente/>} />
      </Route>
      <Route path='/mainpage/professeurs' element={<Mainpage_prof />}>
        <Route path='Home' element={ <Contente2/>} />
              
         
      </Route>
    </Route>
  )
)

function App() {
  return (
    
    <div className="App">
      
      <RouterProvider router = {router}/>
        
     
      </div>
 
  );
}

export default App;
