import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    const menu = <div className='md:flex'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/items'>Items</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        {
            user
                ?
                <li><button onClick={logout} className='bg-red-200 text-red-600'>Logout</button></li>
                :
                <div className='md:flex'>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                </div>
        }

    </div>

    if (user) {
        console.log(user)
    }

    return (
        <div class="navbar bg-green-500 text-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">TECHLOG</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <div class="navbar-end">
                <Link to='/' class="btn">Get started</Link>
            </div>
        </div>
    );
};

export default Header;