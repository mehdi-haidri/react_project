import React from 'react'
import '../App.css';
import { Barcontente } from './barcontente';
function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='barlist'>
        {Barcontente.map((val,key) => {
          return (
            <li onClick={() => {
              window.location.pathname = val.link;
            }}
              id= {window.location.pathname == val.link ? "active" : "gg"}
              key={key} className='row'>
              <div id= "icon">{val.icon}</div>
              <div id='title'>{val.title }</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar;