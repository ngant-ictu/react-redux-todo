import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
  const todoList = useSelector((state) => state.todos.todoList);
  console.log({todoList});
  return (
    <div>
      {todoList.map(todo => {
        return <TodoItem key={todo.id} todo={todo}/>
      })}
    </div>
  )
}

export default TodoList