function TodoItem(props) {
  return (
    <li>
      <span>👌</span>
      <p>{props.text}</p>
      <button>✖️</button>
    </li>
  )
}

export {TodoItem}