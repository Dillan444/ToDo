import {CompleteIcon} from '../ToDoIcon/CompleteIcon'
import {DeleteIcon} from '../ToDoIcon/DeleteIcon'
import './TodoItem.css'

function TodoItem({text, completed, onComplete, onDelete}) {
  return (
    <li className="TodoItem">
      <CompleteIcon 
        completed={completed}
        onComplete={onComplete}
      />
      {/* <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >ok</span> */}

      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      <DeleteIcon
        onDelete={onDelete}
      />
      {/* <button className="Icon Icon-delete"
      onClick={onDelete}>✖️</button> */}
    </li>
  )
}

export {TodoItem}