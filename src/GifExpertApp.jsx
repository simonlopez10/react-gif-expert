import { useState } from "react";
import { AddCategory, GifGrid } from './components';



export const GifExpertApp = () => {


  // useState para el arreglo de categorias
  const [categories, setCategories] = useState(['Dragon ball']);


  // Funcion para añadir nueva categoria añadida en componente AddCategory 
  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
    console.log(categories)
  }


  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={onAddCategory}
      />

      {
        categories.map((category) => (

          <GifGrid key={category} category={category} />

        ))
      }

    </>
  )
}
