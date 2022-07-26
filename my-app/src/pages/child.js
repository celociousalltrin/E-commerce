export const Data = (Arr) =>{
    const {display_name,avg_selling_price,avg_mrp,avg_discount,seller_names} = Arr
    return(
        <div>
        <h1>This is {display_name}</h1>
        <h2>This is {avg_selling_price}</h2>
        <h2>This is {avg_mrp}</h2>
        <h2>This is {avg_discount}</h2>
        <h2>This is {seller_names}</h2>
        </div>
    )
}