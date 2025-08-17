import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext =  React.createContext()

function TodoProvider({children}) {

  const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(true)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos =  todos.length
  

  const filteredTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
    }
  )
  const emptyTodos = !filteredTodos.length
  console.log(filteredTodos)
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    const currenteState = newTodos[todoIndex].completed
    newTodos[todoIndex].completed = !currenteState
    saveTodos(newTodos)
  }
  
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  
  return ( 
    <TodoContext.Provider value={
      {totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      filteredTodos,
      deleteTodo,
      completeTodo,
      loading,
      error,
      emptyTodos,
      openModal,
      setOpenModal
      }
    }>
      {children}
    </TodoContext.Provider>
  )

}

// const defaultTodos =  [
//   { text: 'Learn React', completed: false},
//   { text: 'Start react course', completed: true},
//   { text: 'Create a react proyect', completed: false},
//   { text: 'Make housework', completed: false},
//   { text: 'Be focus', completed: false}
// ]

// localStorage.setItem('TODOS_V1', JSON.stringigy(defaultTodos)) 
// localStorage.removeItem('TODOS_V1') 

export {TodoContext, TodoProvider}