import {DiningMockData} from "../mockdata/index"
import Child from "./child"
const Name = ()=>{
  const renderIteration = (()=>{
    return DiningMockData.map((item)=><Child key={item.product_code} {...item}></Child>)
  })
  return (
    <div>
      {renderIteration()}
    </div>
  )
}

export default Name;