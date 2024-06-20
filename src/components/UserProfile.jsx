import { useState, useEffect } from 'react'

export default function UserProfile() {

    const [username, setUsername] = useState("")

    return (
        <div className="mx-auto max-w-4xl bg-orchid-200 p-5 rounded-2xl">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">{username}'s Profile</h3>
            </div>
            <form className="mt-6">
                <dl className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Favourite Cosplay</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                            <input
                                type="text"
                                name="fave_cosplay"
                                placeholder="What is your favourite cosplay?"
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >

                            </input>
                        </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Next convention</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2"><input
                            type="text"
                            name="next_convention"
                            placeholder="Keep track of your next convention!"
                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >

                        </input></dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Bio</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                            <textarea
                                type="text"
                                rows={4}
                                name="user_bio"
                                placeholder="Tell us a bit about yourself"
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >

                            </textarea>
                        </dd>
                    </div>
                </dl>
                <div
                    className="flex items-center justify-end gap-x-6 border-t border-gray-900 px-4 py-4 sm:px-8"
                >
                    <button 
                    type="submit" 
                    className="text-gray rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Save Changes</button>
                </div>
            </form>
        </div>
    )
}
