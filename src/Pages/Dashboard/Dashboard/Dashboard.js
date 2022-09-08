import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const id = user.email;
    const handleButton = () => {
        navigate(`/dashboard/update-account/${id}`)
    }
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <Outlet />
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Order</Link></li>
                        {/* <li><Link to={handleButton}>Update Profile</Link></li> */}
                        <li><button onClick={handleButton}>Update Profile</button></li>
                        <li><Link to='/dashboard/my-account'>My profile</Link></li>
                        <li><Link to='/dashboard/add-review'>Add Review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;