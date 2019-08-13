import React, {useState} from "react";

const TodoForm = (props) => {
    const [item, setItem] = useState('')
  
    const handleChanges = event =>{
        setItem( event.target.value)
    }

    const submitItem = event =>{
        event.preventDefault();
        props.AddTodo(item)
        setItem('')
    }
    return (
        <form onSubmit={submitItem}>
        <input
            type="text"
            value={`${item}`}
            name="item"
            onChange={handleChanges}
        />
        <button>Add</button>
        </form>
    )
}

export default TodoForm;