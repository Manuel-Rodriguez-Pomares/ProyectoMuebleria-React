import React from 'react'
import Item from './Item'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemList = ({products}) => {
  return (
    <div>
     {
     products.map((element)=>
     <Item/>
     )  
     }
  </div>
  )
}

export default ItemList