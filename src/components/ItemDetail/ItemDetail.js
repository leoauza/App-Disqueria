import './ItemDetail.css';
import ItemCount from './components/ItemCount/ItemCount';
import { useEffect, useState } from 'react';
import { Link } from 'react';

function ItemDetail() {
    const [cardFetch, setCardFetch] = useState(true)

    const onAdd = () => {
        setCardFetch(false);
    }

    const fetchCard = () => {
        fetch('data.json') // Llama al Response completo
        .then((response) => response.json())
        .then((data) => {setCardFetch(data)})
    }

    useEffect(() => {
        fetchCard()
    }, [])


    return (
        <div className='detail'>
            <>
            {cardFetch.length !==0 && <h5>{cardFetch[0].artist}</h5>}
            {cardFetch.length !==0 && <h4>{cardFetch[0].title}</h4>}
            {cardFetch.length !==0 && <img style={{width: 250, height: 250}} src={cardFetch[0].thumbnailUrl}/>}
            {cardFetch.length !==0 && <h5>Formato: {cardFetch[0].format}</h5>}
            {cardFetch.length !==0 && <p>{cardFetch[0].precio}</p>}
            {cardFetch.length !==0 && <p>{cardFetch[0].description}</p>}
            {cardFetch ?
                <ItemCount initial={0} stock={5} onAdd={onAdd} ></ItemCount>
            : <button className="button-finalizar"><Link to='/cart'>Finalizar compra</Link></button>}
            </>
        </div>
    );
}

export default ItemDetail;