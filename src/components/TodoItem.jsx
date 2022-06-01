import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/todosSlice';
import { toast }  from 'react-hot-toast';

function TodoItem({ todo }) {
  let dispatch = useDispatch();
  const [name, setName] = useState(todo.name);
  const [editTodo, setEditTodo] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  }
  
  const handleUpdate = () => {
    setEditTodo(!editTodo);

    if (name.length < 1) {
      console.log('vao day');
      toast.error('Input a name todo');
      setEditTodo(true);
      return;
    }
    
    if(editTodo) {
        dispatch(updateTodo({
          id: todo.id,
          name: name
        }));
        toast.success('Task updated successfully');
    }
  }

  return (
      <div className="row mx-5 my-2 align-items-center">
        <div className='w-auto px-0'>#{todo.id.length > 1? todo.id[2]: todo.id}</div>
        <div className='col'>
          { editTodo? <input onChange={(e) => setName(e.target.value)} defaultValue={name} /> : <h4 className='m-0'>{todo.name}</h4> }
        </div>
        <button onClick={handleUpdate} className='btn btn-primary w-auto mx-2'>
          { editTodo? 'Update': 'Edit'}
        </button>
        <button 
          onClick={handleDelete}
          className='btn btn-danger w-auto'
        >
          Delete
        </button>
      </div>
  )
}

export default TodoItem