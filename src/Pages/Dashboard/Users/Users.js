import React from 'react';
import { toast } from 'react-toastify';

const Users = ({ person, refetch }) => {
    const { email, name, role } = person;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data);
                toast.success('Added as Admin')
            })
    }
    return (
        <tr>
            <th>{name}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove</button></td>

        </tr>
    );
};

export default Users;