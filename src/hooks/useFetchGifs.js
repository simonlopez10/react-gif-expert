import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Es el custom hook que usa a la funcion getGifs para obtener el arreglo de imagenes con sus
// respectivas propiedades que entrega la API de giphy

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Funcion que llama a getGifs y setea los gifs en variable images, alr ecibirlos el loading se setea en false
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
  }, [])

  return {
    images: images,
    isLoading: isLoading
  }

}
