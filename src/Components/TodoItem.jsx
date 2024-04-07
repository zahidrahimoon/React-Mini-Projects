import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContaxt'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }

  return (
<div className={`flex items-center border border-gray-200 rounded-lg px-3 py-2.5 gap-x-3 shadow-sm duration-300 ${todo.completed ? "bg-gray-100" : "bg-white"}`}>
    <input
        type="checkbox"
        className="cursor-pointer form-checkbox text-blue-500 h-5 w-5"
        checked={todo.completed}
        onChange={toggleCompleted}
    />
    <input
        type="text"
        className={`flex-1 outline-none bg-transparent rounded-lg text-lg ${todo.completed ? "line-through text-gray-400" : "text-gray-800"} ${isTodoEditable ? "border-b-2 border-blue-500" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
    />
    {/* Edit, Save Button */}
    <button
        className="inline-flex w-8 h-8 rounded-full text-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => {
            if (todo.completed) return;

            if (isTodoEditable) {
                editTodo();
            } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
    >
        {isTodoEditable ? "📁" : "✏️"}
    </button>
    {/* Delete Todo Button */}
    <button
        className="inline-flex w-8 h-8 rounded-full text-lg text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        onClick={() => deleteTodo(todo.id)}
    >
        ❌
    </button>
</div>


  );
}

export default TodoItem;