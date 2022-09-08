import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const UpdateAccount = () => {
    const [user] = useAuthState(auth);
    const { emailId } = useParams();
    const handleSubmit = (event) => {
        event.preventdefault();
        const email = user?.email;
        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;
        const designation = event.target.designation.value;
        const phone = event.target.phone.value;
        const gender = event.target.gender.value;
        const about = event.target.about.value;
        const education = event.target.education.value;
        const address = event.target.address.value;
        axios.patch(`http://localhost:5000/users/${emailId}`, {
            email: email,
            firstname: firstname,
            lastname: lastname,
            designation: designation,
            phone: phone,
            gender: gender,
            about: about,
            education: education,
            address: address
        });
        event.reset();
    };
    return (
        <div>
            <h2 className='text-center text-grey-700 text-5xl font-bold'>Update Profile</h2>
            <div>
                <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-20 mx-auto">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Register in to our platform</h5>
                    <form onSubmit={handleSubmit} class="space-y-6" action="#">
                        <div class="mb-6">
                            <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                            <input type="text" id="firstname" name='firstname' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your first name" required />
                        </div>
                        <div class="mb-6">
                            <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                            <input type="text" id="lastname" name='lastname' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required />
                        </div>
                        <div class="mb-6">
                            <label for="designation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Designation</label>
                            <input type="text" id="designation" name='designation' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required />
                        </div>
                        <div className='mb-6'>
                            <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select gender</label>
                            <select id="gender" name='gender' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div class="mb-6">
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                            <input type="text" id="phone" name='phone' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your phone" required />
                        </div>
                        <div class="mb-6">
                            <label for="about" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About yourself</label>
                            <textarea id="about" name='about' rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="about yourself"></textarea>
                        </div>
                        <div class="mb-6">
                            <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your address</label>
                            <textarea id="address" name='address' rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your thoughts..."></textarea>
                        </div>
                        <div class="mb-6">
                            <label for="education" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your education</label>
                            <textarea id="education" name='education' rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your thoughts..."></textarea>
                        </div>


                        <input type="submit" value='Submit' class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAccount;