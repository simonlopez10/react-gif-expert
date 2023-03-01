import React from 'react'

// Se crea una tarjeta que recibe la url y el titulo de un gif

export const GifItem = ({ title, url }) => {

  console.log(title, url)

  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
