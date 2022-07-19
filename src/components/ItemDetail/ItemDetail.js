import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react';
import { CartContext } from '../CartContext/CartContext';

function ItemDetail() {
    //llamando propiedades con Fetch
    //const [cardFetch, setCardFetch] = useState(true)
    const { precio, id, title, artist, format, thumbnailUrl, description } = props.item;

    //agregando useContext (hook de react para traer contexto)
    const { addToCart } = useContext(CartContext);

    const [purchaseCompleted, setPurchaseCompleted] = useState(false);

    const onAdd = (count) => {
        // recibe stock de itemcount se lo pasa a la funcion de addToCart
        setPurchaseCompleted(true);
        addToCart(props.item, count);
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
            {cardFetch.length !==0 && <img alt="" style={{width: 250, height: 250}} src={cardFetch[0].thumbnailUrl}/>}
            {cardFetch.length !==0 && <h5>Formato: {cardFetch[0].format}</h5>}
            {cardFetch.length !==0 && <p>{cardFetch[0].precio}</p>}
            {cardFetch.length !==0 && <p>{cardFetch([0]).description}</p>}
            {cardFetch ?
                <ItemCount initial={0} stock={5} onAdd={onAdd} ></ItemCount>
            : <button className="button-finalizar"><Link to='/cart'>Finalizar compra</Link></button>}
            </>
        </div>
    );
}

export default ItemDetail;