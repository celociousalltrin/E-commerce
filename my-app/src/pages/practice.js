import React from "react";
import { useState } from "react";

const Name = ()=>{
    const [show,setShow] = useState(true)

    const hanldeClick = (()=>{
        setShow(!show)
    })
    return (
        <div className="ml-5 mt-5">
            {show ? (<div>
                <button className="btn btn-primary" onClick={hanldeClick}>
        click here
       </button>
            </div>) : (
                 <button className="btn btn-success" onClick={hanldeClick}>
                 click 
                </button>)}
            
      
   </div>
    )
}

export default Name;