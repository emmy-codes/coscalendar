import React from 'react'

function Login() {
    return (
        <div>
            <div
                class="mx-auto my-8 grid grid-cols-3 gap-6 lg:pr-3 md:pr-3 grow-0 w-8/12 rounded-lg border-4 border-solid border-purple-heart-500 bg-purple-heart-50 shadow"
            >
                <div class="relative h-full flex-1 hidden lg:block md:block md:col-span-1 lg:col-span-2">
                    <img
                        class="inset-0 h-full w-full rounded-bl-sm rounded-tl-sm object-cover"
                        src="https://easyfairsassets.com/sites/234/2024/05/Comiccon-summer-2024-webb-022.jpg"
                        alt=""
                    />
                </div>

                <div class="flex flex-1 flex-col justify-center px-4 py-12 lg:flex-none col-span-3 lg:col-span-1 md:col-span-2">
                    <div class="mx-auto w-full max-w-sm">
                        <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>

                        <div class="mt-10">
                            <form action="{% url 'login' %}" method="POST" class="space-y-6">
                                <div>
                                    <label
                                        for="username"
                                        class="block text-sm font-medium leading-6 text-gray-900"
                                    >Username:</label>
                                    <div class="mt-2">
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            autocomplete="username"
                                            required
                                            class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        for="password"
                                        class="block text-sm font-medium leading-6 text-gray-900"
                                    >Password:</label>
                                    <div class="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autocomplete="current-password"
                                            required
                                            class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            class="text-purpleheart-600 h-4 w-4 rounded border-gray-300 focus:ring-purple-heart-600"
                                        />
                                        <label
                                            for="remember-me"
                                            class="ml-3 block text-sm leading-6 text-gray-700">
                                                Remember me
                                        </label>
                                    </div>

                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        class="flex w-full justify-center rounded-md bg-purple-heart-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-heart-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-heart-600">
                                        Sign in
                                    </button>
                                </div>
                            </form>

                            <div class="mt-10">
                                <div class="relative">
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="w-full border-t border-gray-200"></div>
                                    </div>
                                    <div class="relative flex justify-center text-sm font-medium leading-6">
                                        <span class="bg-white px-6 text-gray-900">Not registered yet?</span>
                                    </div>
                                </div>

                                <a href="register"
                                    class="text-center mt-6 flex w-full justify-center rounded-md border border-purple-600 bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-purple-700 shadow-sm hover:bg-purple-heart-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-heart-600">
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login