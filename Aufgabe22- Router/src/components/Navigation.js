import React from 'react'
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Navigation() {

    let navigate = useNavigate()
    const [value, setValue] = useState("") 
    const pages = [{
                   pageName: "Home",
                   to:"/"
                   },
                   {
                   pageName: "Moebel",
                   to: "/moebel"
                   },
                   {
                   pageName: "Autos",
                   to: "/autos"
                 }]
                /*  () => navigate(`/${value} `) */
    const handleClick = () => {
        
        if(value === "schrank" || value === "tisch"){
           navigate("/moebel" ,  {replace: true})
        }else{
            navigate("/"+value, {replace:true})
        }
    }            

  
  return (
    <div className='nav-page' >
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} ></input>
        <button onClick={handleClick} >Click</button> 
        <nav>
            <ul className='navbar' >
                {
                    pages.map((page, index) => {
                        return (
                        <li key={index}>
                            <NavLink to={page.to} className="nav-bar-link" style={({isActive}) => {return {color: isActive ? 'skyblue' : 'red', fontSize: isActive ? '40px' : '20px'}}}  >{page.pageName}</NavLink>
                        </li>
                        )
                    })
                }
            </ul>
        </nav>
    </div>
  )
}

export default Navigation