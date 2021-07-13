import React from 'react'
import "./Style.css"
import Button from "./Button"
export default function Hello() {
    return (
        <div>
        <h1 style={{color: 'maroon'}}><b><u> Hello World </u></b></h1> 
            <nav>
               <h2> <li> LetsUpgrade</li></h2>
               <h3> <li> Zero to Hero</li></h3>
               <p><h2 style={{color: '#323781'}}> <u> Hii , I am Nevil Mali. </u></h2></p>
            </nav>
          <Button buttonText="Insert"/>
          <Button buttonText="Update" />
          <Button buttonText="Delete" />
        </div>
    )
}
