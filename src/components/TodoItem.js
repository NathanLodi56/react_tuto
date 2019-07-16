import React from "react"

function TodoItem(props) {
    return(        
    <div className="todo-item ">

        <input type="checkbox" 
        checked={props.todo.completed} 
        onChange={()=> console.log("Check")} 
        />  

        <p>{props.todo.text}</p>  
        -<h3>{props.mavaleur}</h3>

    </div> )
}

export default TodoItem