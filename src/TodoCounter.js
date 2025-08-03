import './TodoCounter.css'

function TodoCounter({total, completed}) {
  return (
    <h1 className='TodoCounter'>
      {total !== completed && `Has completado ${completed} de ${total} TODOs`}
      {total === completed && 'Felicitaciones lograste completar todas las tareas 🥳'}
      </h1>
  )
}

export { TodoCounter }