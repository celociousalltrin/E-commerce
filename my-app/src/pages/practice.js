import {useState,useEffect} from "react";

const Name = (()=>{
    const [count,setCount] = useState(0)
    const [cal,setCal] = useState(-11)
useEffect(()=>{
     setCal(cal+11)
},[count])
    return (
        <div className="mt-5 ml-5">
            <h2>{count}</h2>
<button className="btn" onClick={()=>setCount(count+1)}> + </button>
<h2>{cal}</h2>
        </div>
    )
})

export default Name;