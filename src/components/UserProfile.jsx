import { useState, useEffect } from 'react'
import { useCurrentUser } from '../contexts/CurrentUserContext'
import { axiosReq } from "../api/axiosDefaults"

export default function UserProfile() {

    const currentUser = useCurrentUser()
    const [userProfile, setUserProfile] = useState({})
    const [errors, setErrors] = useState({})

    const handleSubmitData = (event) => {
        setUserProfile({
            ...userProfile,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        if (currentUser) {
            axiosReq.get(
                `/user_profiles`
            ).then((response) => setUserProfile(response.data[0]))
        }
    }, currentUser)

    const handleProfileSubmit = async (event) => {
        event.preventDefault()
        try {
            console.log("profile:", userProfile)
            const response = await axiosReq.put(
                `/user_profiles/${currentUser.pk}/`,
                userProfile[0]
            )
            // updating existing expenses state
            setUserProfile([response.data])
            // clears errors if the expense was successfully created
            setErrors({})
        } catch (error) {
            console.error("Error updating profile:", error.response?.data)
            setErrors(error.response?.data)
        }
    }

    return currentUser && (
        <div className="mx-auto max-w-4xl bg-orchid-200 p-5 rounded-2xl">
            <div className="px-4 sm:px-0">
                <h3 className="text-3xl text-center font-bold text-orchid-900 mb-8">{currentUser.username}'s Profile</h3>
            </div>
            <form className="mt-6" onSubmit={handleProfileSubmit}>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="fave_cosplay" className="block text-sm font-medium text-gray-700 mb-2">
                            Favorite Cosplay:
                        </label>
                        <input
                            type="text"
                            name="fave_cosplay"
                            value={userProfile.fave_cosplay}
                            onChange={handleSubmitData}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="next_convention" className="block text-sm font-medium text-gray-700 mb-2">
                                    Next Convention:
                                </label>
                                <input
                                    type="text"
                                    name="next_convention"
                                    value={userProfile.next_convention}
                                    onChange={handleSubmitData}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500"
                                />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="user_bio" className="block text-sm font-medium text-gray-700 mb-2">
                            Bio:
                        </label>
                        <textarea
                            name="user_bio"
                            value={userProfile.user_bio}
                            onChange={handleSubmitData}
                            rows={4}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500"
                            placeholder="Tell us a bit about yourself"
                        />
                    </div>
                </dl>
                <div
                    className="flex justify-center mt-4"
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
