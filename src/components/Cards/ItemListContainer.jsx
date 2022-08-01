import { display, grid } from '@mui/system';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList';
import React, {useEffect, useState } from 'react'

const ItemListContainer = () => {
  const[products, setProduct]= useState([])

  useEffect(()=>{ 
      setProduct([
              {
                  id:1,
                  modelo:"Silla de madera",
                  descripcion: "Silla hecha a mano de madera de pino, pulida.",
                  precio:3000   
              },
              {
                  id:2,
                  modelo:"Mesita de luz",
                  descripcion: "Mesa hecha a mano de madera de pino, pulida.",
                  precio:3000   
              },
              {
                  id:3,
                  modelo:"Reposera",
                  descripcion: "Reposera hecha a mano de madera de pino, pulida.",
                  precio:3000   
              },
              {
                  id:4,
                  modelo:"Armario",
                  descripcion: "Armario hecho a mano de madera de pino, pulida.",
                  precio:3000   
              },
              {
                  id:5,
                  modelo:"Silla de madera",
                  descripcion: "silla hecha a mano de madera de pino, pulida.",
                  precio:3000   
              },
              {
                  id:6,
                  modelo:"Silla de madera",
                  descripcion: "silla hecha a mano de madera de pino, pulida.",
                  precio:3000   
              }
             
      ])
  },[])

  return (
    
    <>
    <h1>Productos disponibles</h1>
      <div>
        <ItemList products={products} />
      </div>
    </>
    
  )
}

export default ItemListContainer