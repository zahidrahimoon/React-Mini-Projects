import { useState, useEffect } from 'react'
import {TodoProvider} from './Context'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
<div className="bg-gray-800 min-h-screen py-8 text-white">
    <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-6 py-4">
        <h1 className="text-3xl font-bold text-center mb-8 mt-2">TODO APP</h1>
        <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
        </div>
        <div className="grid gap-4">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
                <div key={todo.id} className="bg-gray-700 rounded-lg p-4">
                    <TodoItem todo={todo} />
                </div>
            ))}
        </div>
    </div>
</div>

    </TodoProvider>
  )
}

export default App