import React from 'react'
import Item from './Item'



const ItemList = ({products}) => {
  return (
    <div>
     {
     products.map((element)=>
     <Item modelo={element.modelo} descripcion={element.modelo} precio={element.precio} />
     )  
     }
  </div>
  )
}

export default ItemList