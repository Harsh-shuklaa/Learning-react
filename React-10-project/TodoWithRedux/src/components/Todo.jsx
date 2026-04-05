import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editTodo, removeTodo } from '../Feature/todo/todoSlice';

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.msg}</div>

       <div className='flex justify-between gap-4'>
             <button
              onClick={() => dispatch(editTodo(todo.id,todo.msg))}
              className="text-white bg-blue-500 border-0 py-1 px-4 hover:bg-blue-600 hover:cursor-pointer rounded text-md"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 hover:bg-red-600 hover:cursor-pointer rounded text-md"
            >
              Delete
            </button>
       </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo