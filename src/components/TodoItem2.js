import React from "react"

function TodoItem2(props) {
    return(        
    <div className="todo-item ">

        <input type="checkbox" 
        checked={props.todo2.completed} 
        onChange={() => props.handleChange(props.todo2.id)}
        />  
        <p>{props.todo2.text}</p>  
        -<h3>{props.mavaleur}</h3>

    </div> )
}

export default TodoItem2