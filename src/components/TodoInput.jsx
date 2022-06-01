import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';
import {v1 as uuid} from 'uuid';
import { toast } from 'react-hot-toast'

function TodoInput() {
  let dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name) {
      dispatch(addTodo({
        id: uuid(),
        name: name
      }));
      toast.success('Task added successfully');
    } else {
      toast.error('Task is empty');
    }
   
    setName('');
  }
  return (
    <div className="row m-5">
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Input a todo'
        className='col form-control'
        />
      <button onClick={handleAdd} className='btn btn-primary mx-2 w-auto'>Add</button>
    </div>
  )
}

export default TodoInput