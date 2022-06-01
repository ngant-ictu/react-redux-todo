import { createSlice } from '@reduxjs/toolkit';
import { todos } from './state'


const initialValue = {
  todoList: todos
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      let newTodos = [...state.todoList];
      newTodos = newTodos.filter(todo => todo.id !== action.payload);
      state.todoList = newTodos;
    },
    updateTodo: (state, action) => {
      let newTodos = [...state.todoList];
      newTodos.forEach((todo, index) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name
        }
      });
      state.todoList = newTodos
    }
  }
})

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions
export default todosSlice.reducer