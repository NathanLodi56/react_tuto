import React from "react"

class App13 extends React.Component{
     constructor(){
        super()
            this.state={
            isLoggedIn:false,  

            }
        }
            render(){
                return(
                    <div>
                        <h1>You are currently logged{this.state.isLoggedIn?'\n in':"\n out"}</h1>
                    </div>
                )
            }

        }


export default App13
