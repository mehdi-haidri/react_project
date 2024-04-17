import React,{useEffect,useState} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const name = window.localStorage.getItem('username');
const id = window.localStorage.getItem('id');

function Contente() {

  const [notes, setnotes]=useState([]);

  const info = {
  id
}


  useEffect(() => {
    fetch("http://localhost/Eservice/getnote.php/",{
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
    body : JSON.stringify(info)
 }).then(respons => respons.json()).then(resault => {
    setnotes(resault);
     
}).catch(error => {
    console.error('Error:', error);
});


},[])
  return (

    notes && <div className=' contente scroll'>
      <table className="table table-primary">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">module</th>
      <th scope="col">note</th>
      <th scope="col">V/R</th>
    </tr>
  </thead>
  <tbody>
          {notes.map((n,i)=>{
            return (
              <tr key={i}>
                <th scope="row">{n.id}</th>
                <td>{n.module}</td>
                <td>{ n.note}</td>
                 <td>V</td>
                   </tr>
            )
     })}
   
  </tbody>
</table>
    </div>
  )
}

export default Contente