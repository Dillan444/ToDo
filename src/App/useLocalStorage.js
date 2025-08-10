import React from "react"

function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem('TODOS_V1')

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue))
  } 

  const [item, setItem] = React.useState(()=>{
    if(!localStorageItem) {return initialValue}
    else{return JSON.parse(localStorageItem)}
  })

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

export {useLocalStorage}