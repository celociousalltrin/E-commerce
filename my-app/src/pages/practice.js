import {useState} from "react"

const Name = () =>{
const [log,setLog] = useState(true)

const handleClick = ()=>{
    setLog(!log)
}

const In = () =>{
    return (<div><button className="btn btn-primary"
    onClick={handleClick}>Login</button>
    <h4>Welcom Guest</h4></div>
)}

const Out = () =>{
    return <button className="btn btn-secondary"
    onClick={handleClick}>Log out</button>
}
    
    return (
        <div>
            <h1>Hello</h1>
            {log ? <In /> : <Out />}
        </div>
    )
}

export default Name;