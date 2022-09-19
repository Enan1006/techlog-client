import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Loader from '../../Shared/Loader/Loader';
import Users from '../Users/Users';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch('http://localhost:5000/users', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loader />
    }
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
                        {
                            users.map(person => <Users
                                person={person}
                                refetch={refetch}
                                key={person._id}
                            ></Users>)
                        }
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AllUsers;