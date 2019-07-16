import React from "react"
import Product from "./components/Product"
import productenData from "./components/Data/productsData"

function App8 (){

    const productsComponents = productenData.map (item => <Product key={item.id}  product={item} />)


    return(
        <div>
            {productsComponents}
        </div>
    )
}



export default App8