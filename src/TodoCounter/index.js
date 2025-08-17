import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext'

function TodoCounter() {
  const {
    totalTodos:total,
    completedTodos:completed,
  } = React.useContext(TodoContext)

  return (
    <h1 className='TodoCounter'>
      {total !== completed && `Has completado ${completed} de ${total} TODOs`}
      {total === completed && 'Felicitaciones lograste completar todas las tareas 🥳'}
      </h1>
  )
}

export { TodoCounter }