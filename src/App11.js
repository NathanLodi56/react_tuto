import React from "react"

class App11 extends React.Component {

    constructor(){
        super()
        this.state= {answer:" \n Answer: Yes"}
    }
    render(){

        return(
            <div>
                <h1>Salut Beau gosse choclat tu sais les States c'est important{this.state.answer} </h1>
               

            </div>
                // //<ChildComponent answer={this.state.answer} doit etre mis haut dessus/>//
                //exemple relation parent- enfant parent child noramlemnt utlise props mais//
        )
    }

  
}
export default App11
