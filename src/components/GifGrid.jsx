import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// Gif grid es el contenedor de todos (12 en total) los items (imagen y titulto de imagen) por categoria

export const GifGrid = ({ category }) => {


  // Aqui se llama el custom hook y se destructura en images y en isLoading
  const { images, isLoading } = useFetchGifs(category);

  console.log('isLoading: ', { isLoading })

  return (
    <>
      {/* Se muestra el titulo de la categoria */}
      <h3>{category}</h3>

      {/* Se despliega mensaje de cargando... por si se demora la respuesta de la API */}
      {isLoading && (<h2>Cargando...</h2>)}

      {/* Se crea un map para recorrer la respuesta 'images' y mostrar cada imagen con su titulo */}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image}
          />
        ))}

      </div>
    </>
  )
}
