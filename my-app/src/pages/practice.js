import {useState,useEffect} from "react"

const Name = () =>{
    const [price,setPrice] = useState(0)

    useEffect(()=>{
        console.log("It runs for every render")
    },[])

    const handleClick =() =>{
        setPrice(price+1)
    }
const X  = () =>{
    return(
        <h1>{price} is even number</h1>
    )
}


const Y  = () =>{
    return(
        <h1> {price} is odd number</h1>
    )
}
    return (
        <div className = "mt-5 ml-5">
            <h1>The amount will increase {price}</h1>
           {price % 2 ==0 ? <X /> : <Y />}
   <button className = "btn btn-primary" 
   onClick={handleClick}>Click here</button>
        </div>
    )
}

export default Name;