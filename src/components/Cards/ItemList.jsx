import React from 'react'
import Item from './Item'
import ItemListContainer from './ItemListContainer'




const ItemList = ({products}) => {
  return (
    <div>
     {
     products.map((element)=>
     <Item key={element.id} element={element} />
     )  
     }
  </div>
  )
}

export default ItemList