import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContaxt';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
    <form onSubmit={add} className="flex items-center justify-center">
    <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border text-black border-gray-300 rounded-l-lg px-3 outline-none duration-150 bg-gray-100 py-2"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
    />
    <button type="submit" className="rounded-r-lg px-4 py-2 bg-blue-500 text-white ml-2">
        Add
    </button>
</form>

  );
}

export default TodoForm;