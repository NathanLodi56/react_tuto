import React from "react"

function JsWithJsx (){
    const firstName = "Nathan"
    const lastName = "Ndjoni Lodi "
    return(
        // <h1>"Je m'appelle+""+Firstname+Lastname</h1>
        <h1>Je m'appelle {firstName+""+lastName} !</h1>

    )
}
export default JsWithJsx