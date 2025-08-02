// import logo from './logo.svg';
import { React } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos =  [
  { text: 'Learn React', completed: false},
  { text: 'Start react course', completed: true},
  { text: 'Create a react proyect', completed: false},
  { text: 'Make housework', completed: false}
]

function App() {
  return (
    <div>

      <TodoCounter total={25} completed={16}  />
      <TodoSearch />
      
      <TodoList>

        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} />))}
      </TodoList>

      <CreateTodoButton/>
    </div>
  );
}

export default App;
