import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const UpdateAccount = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        axios.put()
    };
    return (
        <div>
            <h2 className='text-center text-grey-700 text-5xl font-bold'>Update Profile</h2>
            <div>
                <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-20 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} class="space-y-6" action="#">
                        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Register in to our platform</h5>
                        <div className='mb-6'>
                            <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                            <input {...register("firstname", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                }
                            })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" type="text" name="name" />
                            <span>{errors.firstname?.type === 'required' && <p className='text-red-500'>{errors.firstname?.message}</p>}</span>
                        </div>
                        <div className='mb-6'>
                            <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                            <input {...register("lastname", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                }
                            })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" type="text" name="name" />
                            <span>{errors.lastname?.type === 'required' && <p className='text-red-500'>{errors.lastname?.message}</p>}</span>
                        </div>
                        <div className='mb-6'>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your designation</label>
                            <input {...register("designation", {
                                required: {
                                    value: true,
                                    message: "Designation is required"
                                }
                            })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" type="text" name="name" />
                            <span>{errors.designation?.type === 'required' && <p className='text-red-500'>{errors.designation?.message}</p>}</span>
                        </div>
                        <div className='mb-6'>
                            <label for="about" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">About myself</label>
                            <textarea {...register("about", {
                                required: {
                                    value: true,
                                    message: "Description is required"
                                }
                            })} cols="30" rows="10" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" type="text" name="name" />
                            {/* {errors.name?.type === 'required' && "First name is required"} */}
                            <span>{errors.about?.type === 'required' && <p className='text-red-500'>{errors.about?.message}</p>}</span>
                        </div>
                        <div className='mb-6'>
                            <label for="education" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Education</label>
                            <textarea {...register("education", {
                                required: {
                                    value: true,
                                    message: "Education is required"
                                }
                            })} cols="30" rows="10" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" type="text" name="name" />
                            <span>{errors.education?.type === 'required' && <p className='text-red-500'>{errors.education?.message}</p>}</span>
                        </div>
                        <div className='mb-6'>
                            <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                            <textarea {...register("address", {
                                required: {
                                    value: true,
                                    message: "Address is required"
                                }
                            })} cols="30" rows="10" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" type="text" name="name" />
                            <span>{errors.address?.type === 'required' && <p className='text-red-500'>{errors.address?.message}</p>}</span>
                        </div>


                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAccount;