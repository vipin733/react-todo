import React, { useState } from 'react'

const TodoInputForm = ({onAddTodo}) =>  {
  const [todoInput, addTodoInput] = useState('')
  const _addTodo = () => {
    onAddTodo(todoInput)
    addTodoInput('')
  }
  return (
    <>
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" onChange={e => addTodoInput(e.target.value)} value={todoInput} placeholder="Title..."/>
        <span onClick={() => _addTodo()} className="addBtn">Add</span>
      </div>
    </>
  )
}


const TodoList = ({todos}) =>  {
  return (
    <>
      <ul>
        {
          todos.map((todo, index) => <li key={index}>{todo}</li>)
        }
      </ul>

    </>
  )
}

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
    </>
  )
}

export default Index
