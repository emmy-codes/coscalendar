import { useState, useEffect } from 'react';

export default function UserProfile() {

    const [username, setUsername] = useState("")

    return (
        <div className="mx-auto container">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">{username}'s Profile</h3>
            </div>
            <div className="mt-6">
                <dl className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">Mother of Dinos</dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Favourite Cosplay</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">Pink Mercy</dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Instagram</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2"><a href="http://www.instagram.com" target='_blank'>www.instagram.com</a></dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Next convention</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">ComicCon Winter 2024</dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Bio</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                            qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                            pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
