import React, { useState } from 'react'
import TodoInputForm from './components/todo/inputForm'
import TodoList from './components/todo'
import Login from './components/login'
import './App.css'
const Index = () =>  {
  const [todos, addTodo] = useState([])
  const [componentKey, setComponentKey] = useState(1)

  const _addTodo = todoInput => {
    todos.unshift(todoInput)
    addTodo(todos)
    let currentKey = componentKey + 1
    setComponentKey(currentKey)
  }

  return (
    <>
      <TodoInputForm  onAddTodo={todoInput => _addTodo(todoInput)}/>
      <TodoList key={componentKey} todos={todos}/>

      <Login/>
    </>
  )
}

export default Index
