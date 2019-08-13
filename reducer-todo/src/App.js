import React, {useReducer} from 'react';
import './App.css';
import './components/Todo.css'

import { initialState, todoReducer } from "./reducers/todoReducer";

import TodoList from './components/TodoList'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  }

  console.log(state)

  return (
    <div className="App">
      <TodoList todoArray = {state.todoArray} toggle={toggleCompleted}/>
    </div>
  );
}

export default App;
