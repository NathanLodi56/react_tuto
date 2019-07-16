import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/Data/todosData";

function App9() {

    const todosComponents = todosData.map(item => <TodoItem key={item.id}  todo={item} mavaleur='nico' /> ) 
    return(
        <div className="todo-list">
          {todosComponents}
        </div>
    )
}

export default App9