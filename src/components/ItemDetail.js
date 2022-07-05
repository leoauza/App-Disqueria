import './ItemDetail.css';

function ItemDetail({precio, format, thumbnailUrl}) {
    return (
        <div className='detail'>
            <h5>{format}</h5>
            <img style={{width: 250, height: 250}} src={thumbnailUrl}/>
            <p>{precio}</p>
            <p>{description}</p>
        </div>
    );
}

export default ItemDetail;