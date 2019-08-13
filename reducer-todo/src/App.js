import React, {useReducer} from 'react';
import './App.css';
import './components/Todo.css'

import { initialState, todoReducer } from "./reducers/todoReducer";

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

function App() {
  let [state, dispatch] = useReducer(todoReducer, initialState);

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  }

  const AddTodo = item => {
    dispatch({type: "ADD_TODO", payload: item})
  }

  const clearTodos = () => {
    dispatch({type: 'CLEAR'})
  }

  console.log(state)

  return (
    <div className="App">
      <TodoList todoArray = {state.todoArray} toggle={toggleCompleted}/>
      <TodoForm AddTodo={AddTodo}/>
      <button onClick={() => clearTodos()}>Clear completed</button>
    </div>
  );
}

export default App;
