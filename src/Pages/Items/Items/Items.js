import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(Res => Res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='m-3 md:m-20'>
            <div></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;