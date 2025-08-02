import './TodoItem.css'

function TodoItem({text, completed}) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>ok</span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      <button className="Icon Icon-delete">✖️</button>
    </li>
  )
}

export {TodoItem}