import './TodoItem.css'

function TodoItem({text, completed, onComplete, onDelete}) {
  return (
    <li className="TodoItem">

      <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >ok</span>

      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      <button className="Icon Icon-delete"
      onClick={onDelete}>✖️</button>
    </li>
  )
}

export {TodoItem}