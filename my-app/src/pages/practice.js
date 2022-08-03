import {useState} from "react"

const Name = ()=>{
    const [state,setState] = useState(true)

const In = (()=>{
   return <div>
       <button className="mt-5 ml-5 btn btn-primary" 
       onClick={handleClick}> click Here</button>
    </div>
})

const Out = (()=>{
   return <div>
       <button className="mt-5 ml-5 btn btn-success" 
       onClick={handleClick}>Click here</button>
    </div>
})

const handleClick = (()=>{
    setState(!state)
})
    return (
        <div>
 {state ? <In /> : <Out />}
        </div>
    )
} 

export default Name;