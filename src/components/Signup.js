import React from 'react'

export default function Signup() {
    return (
        <div>
            <div
                class="mx-auto my-8 grid grid-cols-3 gap-6 lg:pr-3 md:pr-3 grow-0 w-8/12 rounded-lg border-4 border-solid border-purple-heart-500 bg-purple-heart-50 shadow">
                <div class="relative h-full flex-1 hidden lg:block md:block md:col-span-1 lg:col-span-2">
                    <img class="inset-0 h-full w-full rounded-bl-sm rounded-tl-sm object-cover"
                        src="https://easyfairsassets.com/sites/234/2024/05/parad.jpg"
                        alt="" />
                </div>
                <div class="flex flex-1 flex-col justify-center px-4 py-12 lg:flex-none col-span-3 lg:col-span-1 md:col-span-2">
                    <div class="mx-auto w-full max-w-sm">
                        <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Don't have an account yet?
                        </h2>
                        <p>
                           Simply input your email and chosen password to create an account!
                        </p>
                        {/* error message placeholder  <div class="mt-10">
                            <div class="rounded-md bg-red-300 p-4">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <h3 class="text-sm font-medium text-red-800">There were {{ field.errors.length }} errors with your submission</h3>
                                        <div class="mt-2 text-sm text-red-700">
                                            <ul role="list" class="list-disc space-y-1 pl-5">
                                                <li>{{ error }}</li>

                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div> */}
                        <form action="register" method="POST" class="space-y-6">
                            <div>
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email:</label>
                                <div class="mt-2">
                                    <input id="email" name="email" type="email" required
                                        class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username:</label>
                                <div class="mt-2">
                                    <input id="username" name="username" type="text" required
                                        class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <label for="password1" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div class="mt-2">
                                    <input id="password1" name="password1" type="password" required
                                        class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label for="password2" class="block text-sm font-medium leading-6 text-gray-900">Confirm your password</label>
                                <div class="mt-2">
                                    <input id="password2" name="password2" type="password" required
                                        class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button type="submit"
                                    class="flex w-full justify-center rounded-md bg-purple-heart-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-heart-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-heart-600">
                                    Sign up
                                </button>
                            </div>
                        </form>

                        <div class="mt-10">
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div class="w-full border-t border-gray-200"></div>
                                </div>
                                <div class="relative flex justify-center text-sm font-medium leading-6">
                                    <span class="bg-white px-6 text-gray-900">Already registered?</span>
                                </div>
                            </div>

                            <a href="login"
                                class="mt-6 text-center flex w-full justify-center rounded-md border border-purple-600 bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-purple-700 shadow-sm hover:bg-purple-heart-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-heart-600">
                                Sign in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
