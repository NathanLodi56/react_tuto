import React from "react"
function Product(props){
    return (
    <div>
        <h3 style={{color:props.name ? "none" : "#00ff11"}}>name:{props.product.name}</h3>
        <h3 style={{color:props.price? "none" : "#00ff11" }}>price:{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h3> 
        - <h3 style={{color:props.product.description? "none" : "#00ff11" }}>description:{props.product.description}</h3> 
     
        {/* <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} 
            - {props.product.description}</p>
        </div> */}
    </div>


    )
}

export default Product