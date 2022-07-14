import './ItemDetailContainer.css'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {

  const [info, setInfo] = useState ([])
  
  useEffect(()=>{
    fetch('data.json')
    .then((resp) => resp.json())
    .then((data) => setInfo(data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <section className='cuerpo'>
        <div className='catalogo'>
          <ItemDetail products={info} /> 
        </div>
    </section>
  );
}

export default ItemDetailContainer;