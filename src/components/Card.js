import React from 'react'

const Card = ({title, price,image}) =>{
  return (
      <div className='card'>
      <img src={image} alt={title} />
      <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">${price}</p>
      <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  )
}

export default Card;