import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`, {
            method: "GET",
            headers: {
                // "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])
    return (
        <div>
            <h2 className='text-center text-grey-700 text-5xl font-bold'>My Orders</h2>
        </div>
    );
};

export default MyOrder;