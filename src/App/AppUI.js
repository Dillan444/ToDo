import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({totalTodos,completedTodos,searchValue,setSearchValue,filteredTodos,deleteTodo,completeTodo}) {
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

export {AppUI}