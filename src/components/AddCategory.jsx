import { useState } from "react"


// Este componente recibe una función definida en
// componente padre y cambia el useState de categorias

export const AddCategory = ({ onNewCategory }) => {

  // UseState para capturar el valor tipeado
  const [inputValue, setInputValue] = useState('')

  // Funcion para capturar cada letra tipeada y setearlo en inputValue
  const onInputChange = (event) => {
    setInputValue(event.target.value)
    console.log(event.target.value)
  }

  // Funcion onSubmit para ejecutar al darle enter al buscador
  const onSubmit = (event) => {
    event.preventDefault();

    // Si el input limpiado con .trim() es menor o igual a uno no hacer nada
    if (inputValue.trim().length <= 1) return;

    // Cuando el valor sea mayor que uno, llame a la funcion para añadir nueva categoria
    onNewCategory(inputValue.trim());

    // Setear el inputValue como vacio
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
