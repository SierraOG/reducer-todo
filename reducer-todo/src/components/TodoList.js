import React from 'react'

import Todo from './Todo'

const TodoList = ({todoArray,toggle}) => {
    return (
      <div className="todo-list">
        {todoArray.map((todo) => (
            <Todo key={todo.id} todo={todo} toggle={toggle} />
        ))}
      </div>
    )
}

export default TodoList;