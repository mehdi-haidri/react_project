import React from 'react'
import '../App.css';
import { useState } from 'react'
import SchoolIcon from '@mui/icons-material/School';
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Login() {
    let [username, setusername] = useState("");
    let [password, setpassword] = useState("");
    let [type, settype] = useState("");
    let [error, seterror] = useState('');


    const handlesubmit = async  (e) => {
        e.preventDefault();
          
        seterror('');

        let info = {
            username: username,
            password: password,
            type
        }
        console.log(info)

        let data = await fetch("http://localhost/Eservice/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        }).then(res =>
            res.json()
        ).then(re => re
        )
        console.log(data);
        if (data.error) {
            seterror(data.error);
        } else {
            if (data.username === username && data.password === password) {
                window.location.pathname = "/mainpage/" + data.user_type;
           
                localStorage.setItem("username", data.username);
                localStorage.setItem("id", data.id);
                localStorage.setItem("password", data.password);
                localStorage.setItem('user_type', data.user_type);
            }
        }
    }
    
    const hundlsignup = () => {
        
        window.location.pathname = "/SignUP";
    }

    let style = {
        width: '100px',
        height : 'auto'
    }

  return (
      <div className='login'>
          <div className='loginstyle'>
              <div className='logo'>
                  <SchoolIcon style={style} />
                  <div><h1>Log In</h1></div>
              </div>
              <form className='loginform' onSubmit={handlesubmit} >
                  <select className="form-select" aria-label="Default select example" onChange={(e) => {settype(e.target.value)}}>
                   <option selected>Open this select menu</option>
                   <option value="student">Student</option>
                   <option value="professeurs">prof</option>
                   
            </select>
              <div className='input1'>
               <label>Username</label><input required type='text' name='username' onChange={(e)=>setusername(e.target.value) } value = {username} />
              </div>
              <div className='input2'>
               <label>Pasword</label><input required type='password' name='password' onChange={(e)=>setpassword(e.target.value) } value = {password}/>
              </div>
               
              <input type='submit' className='submit' value='Log In'/>
              </form>
              {error && <div className='message'><p>{error}</p></div>}
              <hr></hr>
              
              <div className='sign up' onClick={hundlsignup}
              ><button>Sign Up</button></div>
          </div>
          
     </div>
  )
}





