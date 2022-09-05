import React, { useEffect, useState } from 'react';
import Item from '../../Items/Item/Item';

const FeatureItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/feature-products')
            .then(Res => Res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='mx-auto md:mx-20 md:my-40'>
            <h2 className='text-green-600 text-4xl font-bold text-center mb-10'>Feature Items</h2>
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

export default FeatureItem;