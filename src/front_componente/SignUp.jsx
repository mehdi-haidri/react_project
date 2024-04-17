import React from 'react'
import '../App.css';
import { useEffect, useState } from 'react'
import SchoolIcon from '@mui/icons-material/School';
export default function SignUp() {
    const style = {
        width: '100px',
        height : 'auto'
    }

    let [username, setusername] = useState("");
    let [password, setpassword] = useState("");
    let [type, settype] = useState("");
    let [succes, setsucces] = useState(false);
    let [message, setmessage]= useState('')
    const hundlreturn = () => {
        
        window.location.pathname = "/";
    }

    let info = {
        username: username,
        password: password,
        type
    }

    const handlsubmit = async (e) => {
        e.preventDefault();
        let data = await fetch("http://localhost/Eservice/adduser.php/", {
            method: 'POST',
            body :JSON.stringify(info)
        }).then(res=>res.json())
console.log(data)
        if (data == false) {
            setmessage('succesfully signed up');
            setsucces(true)
            setusername('');
            setpassword('');
        } else if(data.includes("SQLSTATE[23000]")){
            setmessage('username is taken');
            setsucces(true)
            setusername('');
            setpassword('');
        }

   }

  return (
    <div className='login'>
          <div className='loginstyle'>
              <div className='logo'><SchoolIcon style={style}/><div><h1>Sign Up</h1></div></div>
              <form className='loginform' onSubmit={handlsubmit} >
                  <select className="form-select" aria-label="Default select example" onChange={(e) => {
                      settype(e.target.value)
                  }}>
                   <option value ={type} selected>Open this select menu</option>
                   <option value="student">Student</option>
                   <option value="professeurs">Prof</option>
            </select>
              <div className='input1'>
                      <label>Username</label><input required type='text' name='username' onChange={(e) => {
                          setusername(e.target.value)
                          setsucces(false)
                      }} value={username} />
              </div>
              <div className='input2'>
               <label>Pasword</label><input required type='password' name='password' onChange={(e)=>setpassword(e.target.value) } value = {password}/>
              </div>
               
              <input type='submit' className='submit' value='Sign Up'/>
              </form>
              {succes && <div className={message == "username is taken" ?"messagesignupfaild" :'messagesignupsucces' } ><p>{ message}</p></div>}
              <hr></hr>
              <div className='sign up' onClick={hundlreturn}
              ><button>Log In</button></div>
             </div>
          
     </div>
  )
}

