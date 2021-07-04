import React from 'react'
import Typewriter from "typewriter-effect";

function Intro() {
    return (
        <div className="Intro" style={{backgroundImage: "url(/Images/j.png)",backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: "100%",
  height: "750px"}}>
       <Typewriter className="int"
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Hola ")
  
  .pauseFor(1000)
  .deleteAll()
  .typeString("Welcome!! to my portfolio webpage")
  .start();
  }}
  />
  
  
  
    </div>
    )
}

export default Intro
