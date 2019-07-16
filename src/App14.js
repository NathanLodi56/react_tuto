import React from "react"
import TodoItem2 from "./components/TodoItem2"
import todosData2 from "./components/Data/todosData2";


class App14 extends React.Component{
    constructor(){
        super()
            this.state={
                todos: todosData2

            }
            this.handleChange= this.handleChange.bind(this)
    }

    handleChange(id){
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo =>{
            if (todo.id === id){
                todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
        render(){
            const todosComponents2 = this.state.todos.map(item => <TodoItem2 key={item.id}  todo2={item} mavaleur='nico' handleChange={this.handleChange} /> ) 

            return(
                <div className="todo-list">
                    {todosComponents2}
                </div>
            )
        }

    
}

export default App14