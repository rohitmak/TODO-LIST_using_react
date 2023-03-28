import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let myStlye = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container my-3" style={myStlye}>
      <h3 className="my-3">Todos List</h3>
      {/* {props.todos} */}
      {props.todos.length === 0 ? "No Todos to Display :)" :
        props.todos.map((todo) => {
          return(
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        )})
      }
    </div>
  )
}

export default Todos
