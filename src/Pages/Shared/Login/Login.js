import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        userEmail,
        loadingEmail,
        errorEmail,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

    const token = useToken(userEmail || userGoogle)

    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            // navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loadingEmail || loadingGoogle) {
        return <Loader></Loader>;
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        console.log(data)
    };
    if (errorEmail || errorGoogle) {
        toast(`${errorEmail?.message || errorGoogle?.message}`)
    }
    return (
        <div>
            <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-20 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input {...register("email", {
                            required: {
                                value: true,
                                message: "Email Address is required"
                            }
                        })} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="john@doe.com" />
                        <span>{errors.email?.type === 'required' && <p className='text-red-500'>{errors.email?.message}</p>}</span>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input {...register("password", {
                            minLength: {
                                value: 8,
                                message: 'Password should be 8 length'
                            },
                            required: {
                                value: true,
                                message: "Password is required"
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
                                message: 'Passsword should contain atleast an uppercase, a lowercase and a  special charactor'
                            }
                        })} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        <span>{errors.password?.type === 'required' && <p className='text-red-500'>{errors.password?.message}</p>}</span>
                        <span>{errors.password?.type === 'minLength' && <p className='text-red-500'>{errors.password?.message}</p>}</span>
                        <span>{errors.password?.type === 'pattern' && <p className='text-red-500'>{errors.password?.message}</p>}</span>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-start">
                        </div>
                        <Link to='/reset-password' href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</Link>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to='/signup' class="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                    </div>
                </form>
                <div className='mt-6 grid justify-center'>
                    <button onClick={() => signInWithGoogle()} type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;