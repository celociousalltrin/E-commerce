import {useState,useEffect} from "react"

const Name = () =>{
    const [count,setCount]=useState(0)
    const [cal,setCal] = useState(-2)
    useEffect(()=>{
        setCal(cal+2)
    },[count])
    return (
        <div className="mt-5 ml-5">
            <h3>count: {count}</h3>
    <button className="btn btn-sm btn-secondary" onClick={()=>setCount(count+1)}>
        +
    </button>
    <h3>calculation:{cal}</h3>
        </div>
    )
}

export default Name;