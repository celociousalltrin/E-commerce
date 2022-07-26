import { Data } from "./child";
import { DiningMockData } from "../mockdata";

const Name =() =>{
    const x  = () =>{
        return(
            DiningMockData.map((element)=><Data key = {element.product_code}{...element}/>) 
        )
    }
    return(
        <div>
            {x()}
        </div>
    )
}

export default Name;