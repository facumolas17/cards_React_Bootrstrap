import React from 'react';
const Card = ({title, imagenUrl}) => {
  return (
    <div className='card'>
        <div className="card-body text-center">
            <img className='img-fluid' src={require(`../assets/imagenes/img-${imagenUrl}.jpg`)} alt='imagen producto' />
            <h5 className='card-title pt-2 '>{title}</h5>
            <p className='card-text text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam, unde facilis praesentium nobis delectus soluta accusantium voluptates laboriosam sequi velit magni officia, harum id laborum quia! Necessitatibus, laborum sed!</p>
            <a href="#" className='btn btn-outline-secondary'>
                Comprar
            </a>
        </div>

    </div>
  )
}

export default Card;