import ItemList from './ItemList'


const Item = (modelo,descripcion,precio) => {

  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{modelo}</Card.Title>
        <Card.Text>
            {descripcion}
        </Card.Text>
        <Button variant="primary">Añadir al carrito:{precio}</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item