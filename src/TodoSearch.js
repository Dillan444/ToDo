import './TodoSearch.css'

function TodoSearch() {
  return (
    <input className="TodoSearch" placeholder="Learn React"
    onChange={(event) => {
      console.log(event.target.value)
    }}
    />
  )
}

export { TodoSearch }