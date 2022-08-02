import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Cards/ItemListContainer';

function App() {

  return (
   <div>
     <NavBar/>
     <ItemListContainer/>
   </div>
  )
}

export default App
