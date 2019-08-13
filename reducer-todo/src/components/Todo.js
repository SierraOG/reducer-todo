import React from 'react'
import Moment from 'react-moment';

const Todo = props => {
    return (
        <div className={`todo${props.todo.completed ? ' completed' : ''}`} 
        onClick={() => props.toggle(props.todo.id)}>
            <p>{props.todo.item} ( created <Moment fromNow>{props.todo.id}</Moment> )</p>
        </div>
    )
}

export default Todo