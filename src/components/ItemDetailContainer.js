import './ItemDetailContainer.css'
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const getItem = () => /* Esta funcion debe return promise con delay */

  const [info, setInfo] = useState ([])
    
  function onAdd(cantidad) {
    console.log(cantidad)
  }
  

  useEffect(()=>{
    fetch('data.json', {timeout: 3000}) // Llama al Response completo
    .then((resp) => resp.json()) // Extrae la info a utilizar en el Respose
    .then((data) => setInfo(data)) // "Setea" la nfo en ntro State
    .catch((err) => console.log(err))
  }, [])

  return (
    <section className='cuerpo'>
      <div>
        <h2>Catálogo de products</h2>
        <p>Elegí tus products de esta lista:</p>
        </div>
        <div className='catalogo'>
          <ItemList products={info} /> 
        </div>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </section>
  );
}

export default ItemDetailContainer;