import React, { useState } from 'react'
import './TodoForm.css'
import {TodoContext} from '../TodoContext'

function TodoForm() {
  const {setOpenModal, addTodo} = React.useContext(TodoContext)
  const [newTodosItem, setNewTodosItem] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodosItem)
    setOpenModal(false)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodosItem(event.target.value)
  }


  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo ToDo</label>
      <textarea
        placeholder="Aprender React"
        value={newTodosItem}
        onChange={onChange}
        required
      />

      <div className="TodoForm-buttonContainer">
        <button 
        type="button"
        className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}
        >Cancelar</button>

        <button 
        type="submit"
        className="TodoForm-button TodoForm-button--add">Añadir</button>
      </div>
    </form>
  )
}

export {TodoForm}