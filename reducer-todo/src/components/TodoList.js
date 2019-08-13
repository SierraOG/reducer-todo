import React from 'react'

import Todo from './Todo'

const TodoList = (props) => {
    return (
      <div className="todo-list">
        {props.todoArray.map((todo) => <Todo todo={todo} toggle={props.toggle}/> )}
      </div>
    )
}

export default TodoList;