import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {

  return (
    <input className="TodoSearch" placeholder="Learn React"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value)
    }}
    />
  )
}

export { TodoSearch }