import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList.js'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer() {

  const [info, setInfo] = useState ([])
    
  function onAdd(cantidad) {
    console.log(cantidad)
  }
  

  useEffect(()=>{
    fetch('data.json') // Llama al Response completo
    .then((resp) => resp.json()) // Extrae la info a utilizar en el Respose
    .then((data) => setInfo(data)) // "Setea" la nfo en ntro State
    .catch((err) => console.log(err))
  }, [])

  return (
    <section className='cuerpo'>
      <div>
        <h2>Catálogo de productos</h2>
        <p>Elegí tus products de esta lista:</p>
        </div>
        <div className='catalogo'>
          <ItemList products={info} /> 
        </div>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </section>
  );
}

export default ItemListContainer;