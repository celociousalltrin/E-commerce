
const Child = ((Data)=>{
    const {display_name,avg_selling_price,avg_mrp} = Data
    return(
        <div>
    <h5>The {display_name}</h5>
    <h3>The {avg_selling_price}</h3>
    <h5>The {avg_mrp}</h5>
        </div>
    )
})

export default Child;