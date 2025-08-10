import React from "react"

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [item, setItem] = React.useState(initialValue)
  const localStorageItem = localStorage.getItem('TODOS_V1')

React.useEffect(()=> {
  setTimeout(() => {
    try {
      !localStorageItem
      ? localStorage.setItem(itemName, JSON.stringify(initialValue))
      : setItem(JSON.parse(localStorageItem))
    
      setLoading(false)
    } catch (error) {
      
      setLoading(false)
      setError(true)
    }
  }, 2000)
},[])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item, saveItem, 
    loading, error
  }
}

export {useLocalStorage}