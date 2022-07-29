export const Player = (w) =>{
    const {country,name}=w
    return(
        <h1>The name is {country} {name}</h1>
    )
}

Player.defaultProps = {
    name:"vijay",
    country:"TamilNadu"

}