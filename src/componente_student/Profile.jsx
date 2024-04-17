import React, {  useEffect, useRef, useState } from 'react'
import '../App.css';

import defaultprofile from '../assets/images/defaultprofile.jpg';
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';
import { imageListClasses } from '@mui/material';
const name = window.localStorage.getItem('username');
const id = window.localStorage.getItem('id');





function Profile() {

    const [urlimage, seturlimage] = useState(defaultprofile);

    const input = useRef(null);
    let info = {
        id : id
    };
   
    useEffect(() => {
            fetch("http://localhost/Eservice/getimage.php/",{
                method: 'POST',
                headers: { 'Content-Type':'image/jpeg'},
            body : JSON.stringify(info)
         }).then(respons => {
             if (respons.ok) { return respons.blob(); }
             else throw new Error('Failed to fetch image');
         }).then(blob => {
            seturlimage(URL.createObjectURL(blob));
             console.log(blob);
        }).catch(error => {
            console.error('Error:', error);
        });

        
    },[])
    


    const handlclick = () => {
        
        input.current.click();
    }

    const handlupload =  async () => {
        const file = input.current.files[0];
   
        
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('id', id);
       const data = await fetch("http://localhost/Eservice/uploadimage.php/", {
            method: "POST",
            body : formData
            
        }).then(response => {
            if (response.ok) {
                console.log("succes");

                return response.json();
            } else {
                console.error('Failed to upload image');
            }
        }
            ).catch(error => {
                console.error('Error:', error);
            });
            

            
        }else {
        console.error('No file selected');
        // Handle no file selected error
    }
        
    }

  return (
      <div className='profile'>
          <div className='image'>
              <input type="file" name='file_input' ref={input} onChange={handlupload}/>
              <img className='image_profile' src= {urlimage } onClick={handlclick}></img>
              <ControlPointSharpIcon  className='icon'/>
          </div>
          
          <h2>{name}</h2>
    </div>
  )
}

export default Profile