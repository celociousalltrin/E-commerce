export const Data = (Arr) =>{
    const {display_name,avg_selling_price,avg_mrp,avg_discount,seller_names} = Arr
    return(
        <div>
        <h1 className="font-weight-bold">This is {display_name}</h1>
        <h2>This is {avg_selling_price}</h2>
        <h2>This is {avg_mrp}</h2>
        <h2>This is {avg_discount}</h2>
        <h2>This is {seller_names}</h2>
        </div>
    )
}

Data.defaultProps = {
    display_name:"No Data Found",
    avg_selling_price:"No Data Found",
    avg_mrp:"No Data Found",
    avg_discount:"No Data Found",
    seller_names:"No Data Found",
}