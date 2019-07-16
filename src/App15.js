import React from "react"

function handleClick(){
    console.log("Yes you click me")
}

// function onHover(){
//     console.log("Yes you click me")
// }

function App15() {
    return(
        <div>
            <img onMouseOver={() => console.log("Passe sur moi")} src="https://www.fillmurray.com/200/100" />
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>

        </div>
    )
}


export default App15