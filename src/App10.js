import React from "react"
import Header from "./compo2/Header"
import Greeting from "./compo2/Greeting"


// #1

class App10 extends React.Component {
    
    render(){

        return(
            <div>
                <Header username="Ndjoni"/>
                <Greeting/>
            </div>
        )
    }

}

export default App10


