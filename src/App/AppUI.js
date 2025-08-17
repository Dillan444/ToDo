import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';



function AppUI() {

  return (
    <>

      <TodoCounter />
      <TodoSearch />
      
      <TodoContext.Consumer>
        {({
          filteredTodos,
          deleteTodo,
          completeTodo,
          loading,
          error,
          emptyTodos
        }) => (
          <TodoList>
            {loading && 
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>}
            {error && <TodosError />}
            {(!loading && emptyTodos) && <EmptyTodos />}

            {filteredTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed} 
              onDelete={() => deleteTodo(todo.text)}
              onComplete={() => completeTodo(todo.text)}/>))}
          </TodoList>
        )}
      </TodoContext.Consumer>
      
  
      <CreateTodoButton/>
    </>
  );
}

export {AppUI}