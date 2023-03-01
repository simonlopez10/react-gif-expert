
// Esta funcion es la encargada de hacer el llamado a la API de giphy

export const getGifs = async (category) => {

  const API_KEY = '4vowSgq5aPC27uR5brq9EY0mgoQ3Afao';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=12`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  console.log(gifs)
  return gifs;
}