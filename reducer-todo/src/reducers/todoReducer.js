export const initialState = {
    todoArray: [
      {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
    ],
    task: ""
  };
  
export const todoReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_COMPLETED":
        return {
          ...state,
          todoArray: state.todoArray.map(todo =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        };
      case "ADD_TODO":
        return {
          ...state,
          todoArray: state.todoArray.concat({
            item: action.payload,
            completed: false,
            id: Date.now()
          }),
          task: ""
        };
      case "CLEAR":
        return {
            ...state,
            todoArray: state.todoArray.filter(todoItem => !todoItem.completed)
        };
      default:
        return state;
    }
}