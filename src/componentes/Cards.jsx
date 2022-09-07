import React from 'react';
import Card from './Card';
import productos from '../contenedores/productos';
const Cards = () => {
    
  return (
    <div className='container d-flex justify-content-center align-items-center'>
        <div className="row">
            
            {
                productos.map(item => (
                    <div className='col-md-4' key={item.id}>
                        <Card title={item.title} imagenUrl={item.image} />
                    </div>
                ))
            }
            
            
        </div>
        

    </div>
  )
}

export default Cards;