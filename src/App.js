import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

// const defaultTodos =  [
//   { text: 'Learn React', completed: false},
//   { text: 'Start react course', completed: true},
//   { text: 'Create a react proyect', completed: false},
//   { text: 'Make housework', completed: false},
//   { text: 'Be focus', completed: false}
// ]

// localStorage.setItem('TODOS_V1', JSON.stringigy(defaultTodos)) 
// localStorage.removeItem('TODOS_V1') 

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1')

  let parsedTodos
  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos =  todos.length

  const filteredTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
    }
  )
  
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))

    setTodos(newTodos)
  }

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
    <>

      <TodoCounter 
        total={totalTodos} 
        completed={completedTodos} />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {filteredTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed} 
          onDelete={() => deleteTodo(todo.text)}
          onComplete={() => completeTodo(todo.text)}/>))}
      </TodoList>
  
      <CreateTodoButton/>
    </>
  );
}

export default App;
