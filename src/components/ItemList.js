import Item from './Item/Item.js'

function ItemList({products}) {
    return (
        <div>
            {products.map (products => (
                <Item
                key={products.id}
                {...products}
                />
            ))}
        </div>
    );

}

export default ItemList;