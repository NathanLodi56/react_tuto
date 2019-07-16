import React from "react"
import "./components/Joke"
import Joke from "./components/Joke";
import JokeData from "./components/Data/jokeData";
function App7(){

        // const nums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // nums.map(function(num){
        // const doubled = nums.map(function(num){
        //     return num * 2
        // })
        // console.log(doubled)
        // })-> checl console log et comprendre le princpe . 

        const jokeComponents = JokeData.map (joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)
        

        
        // Je peux supprime le deuxieme return vue qu'on à en déja un qui renvoie
        // key encore à voir plus en précission   

    return(
        <div>
            {jokeComponents}
        </div>
    )
}


export default App7 