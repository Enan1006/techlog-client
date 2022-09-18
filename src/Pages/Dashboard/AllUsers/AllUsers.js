import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users',
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
        )
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;