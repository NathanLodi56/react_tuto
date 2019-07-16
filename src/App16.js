
import React from "react"

class App16 extends React.Component {
    constructor(){
        super()
        this.state={
            count:0
        }
        this.handleCilck= this.handleCilck.bind(this);
        this.handleCilckMultiply= this.handleCilckMultiply.bind(this)
        this.handleCilckDivide= this.handleCilckDivide.bind(this)

    }

    handleCilck(){
       this.setState(prevState => {
        return{
            count:prevState.count+1 
        }

       })
    }

    handleCilckMultiply(){
        this.setState(prevState =>{
            return{
                count: prevState.count*2
            }
            })

    }


    handleCilckDivide(){
        this.setState(prevState =>{
            return{
                count: prevState.count/2
            
            }
        })
    }


    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleCilck}>Add one more!!!!</button>
                <button onClick={this.handleCilckMultiply}>Multiply</button>
                <button onClick={this.handleCilckDivide}>Divide</button>

            </div>
        )
    }

}


export default App16
