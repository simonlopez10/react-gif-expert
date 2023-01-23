import { useState } from "react"


// Este componente recibe una función definida en
// componente padre y cambia el useState de categorias

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue(event.target.value)
    console.log(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    
    if (inputValue.trim().length <=1) return; 
    onNewCategory(inputValue.trim());
    setInputValue('')

  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
