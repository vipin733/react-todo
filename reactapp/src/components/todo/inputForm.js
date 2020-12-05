import React, { useState } from 'react'

const Index = ({onAddTodo}) =>  {
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

export default Index
