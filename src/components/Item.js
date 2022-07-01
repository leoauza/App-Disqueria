import './Item.css';

function Item({precio, id, title, artist, format, thumbnailUrl}) {
    return (
        <div className='card'>
            <h3>{artist}</h3>
            <h4>{title}</h4>
            <img style={{width: 350, height: 350}} src={thumbnailUrl}/>
            <p>{precio}</p>
            <button>Detalle del producto <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-plus-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
</svg></button>
        </div>
    );
}

export default Item;