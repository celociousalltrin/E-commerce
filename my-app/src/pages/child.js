
const Child = (data)=>{
    const {display_name,avg_mrp} = data
    return (
        <div>
            <h2>The {display_name} age is {avg_mrp}</h2>
        </div>
    )
}

Child.defaultProps = {
    data:{
        display_name:"Vijay",
        avg_mrp:"45"
    }
}

export default Child;