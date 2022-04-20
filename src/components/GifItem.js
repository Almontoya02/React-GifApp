import React from 'react'

export const GifItem = ({title,id,url}) => {

  return (
    <div className='card'>
        <h4>{title}</h4>
        <img className='images' src={url} alt={title}/>
    </div>
  )
}
