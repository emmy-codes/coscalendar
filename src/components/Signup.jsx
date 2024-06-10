import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    // variable signupInfo, function setSignupInfo
    const [signupInfo, setSignupInfo] = useState({
        email: "",
        username: "",
        password1: "",
        password2: ""
    });

    const navigate = useNavigate();
    const { email, username, password1, password2 } = signupInfo;
    const [errors, setErrors] = useState({});

    // event handler for changes made to the form

    const handleChange = (event) => {
        // spread the previous signupInfo to update the attribute being changed
        setSignupInfo({
            ...signupInfo,
            // key/value pair. key = input fields name, value = the content entered
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                // development server running for backend locally
                "http://localhost:8000/dj-rest-auth/registration/",
                signupInfo
            );
            if (response.status === 201 || response.status === 204) {
                navigate("/login", { state: { showSuccess: true, message: "User account successfully created!" } });
            } else if (response.status === 400) { // django will throw a 400 error if there is an issue
                setErrors(response.data);
                console.log("Registration failed:", response.data);
            } else {
                console.error("Signup error:", response.status, response.data);
            }
        } catch (err) {
            // Handle errors here, e.g., display an error message to the user
            console.error("Signup error:", err.response?.data);
        }
    };

    return (
        <div
            className="mx-auto my-8 grid grid-cols-3 gap-6 lg:pr-3 md:pr-3 grow-0 w-8/12 rounded-lg border-4 border-solid border-orchid-500 bg-orchid-50 shadow">
            <div className="relative h-full flex-1 hidden lg:block md:block md:col-span-1 lg:col-span-2">
                <img className="inset-0 h-full w-full rounded-bl-sm rounded-tl-sm object-cover"
                    src="https://easyfairsassets.com/sites/234/2024/05/parad.jpg"
                    alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-center px-4 py-12 lg:flex-none col-span-3 lg:col-span-1 md:col-span-2">
                <div className="mx-auto w-full max-w-sm">
                    <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Don't have an account yet?
                    </h2>
                    <p className="py-2">
                        Simply fill in the form below to create an account!
                    </p>

                    <form
                        method="POST"
                        onSubmit={handleSubmit}
                        className="space-y-6">
                        <div>
                            <label 
                                htmlFor="email" 
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={email}
                                    type="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label 
                                htmlFor="username" 
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >Username:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    onChange={handleChange}
                                    value={username}
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password1"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >Password:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password1"
                                    name="password1"
                                    onChange={handleChange}
                                    value={password1}
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password2"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >Confirm your password:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password2"
                                    name="password2"
                                    onChange={handleChange}
                                    value={password2}
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-orchid-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orchid-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orchid-600">
                                Sign up
                            </button>
                        </div>
                    </form>

                    <div className="mt-10">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm font-medium leading-6">
                                <span className="bg-white px-6 text-gray-900">Already registered?</span>
                            </div>
                        </div>

                        <a href="login"
                            className="mt-6 text-center flex w-full justify-center rounded-md border border-purple-600 bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-purple-700 shadow-sm hover:bg-orchid-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orchid-600">
                            Sign in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
