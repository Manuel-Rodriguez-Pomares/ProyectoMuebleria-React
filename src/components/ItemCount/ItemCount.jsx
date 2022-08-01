import React from 'react'
import  {useState, useEffect} from 'react'
import context from './context'

const ItemCount = ( {stock, initial}) => {
  const [clickCount, setClickCount] = useState(initial);
  const SumarUno =() => {
    setClickCount(clickCount+1)
  }
  const RestarUno =() => {
    setClickCount(clickCount-1)
  }  
 useEffect(()=>{    
    if (clickCount > 5) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Legaste el maximo de productos posibles',
      })
    }
 }, [clickCount])
  
    return (
    <div>
        
        <span>Productos añadidos:{clickCount}</span>
        <button onClick={SumarUno} stock={5} disabled={clickCount === 5} >Añadir al carrito</button>


    </div>
  )
}

export default ItemCount