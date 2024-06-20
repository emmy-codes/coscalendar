import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Success from "./alerts/Success"
import { useCurrentUser } from "../contexts/CurrentUserContext"
import { axiosReq } from "../api/axiosDefaults"
import { useLocation } from "react-router-dom/dist"
import { format } from "date-fns"

function CosPlanForm() {

    const currentUser = useCurrentUser()
    const navigate = useNavigate()
    const location = useLocation()
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleDismissMessage = () => {
        setShowSuccessMessage(false)
        navigate("/calendar")
    }
    // collect selectedDate which is passed down from Calendar
    const initialDueDate = location.state?.cosplan?.due_date || location.state?.selectedDate


    // fetch cosplan data on mount
    const [cosplanData, setCosplanData] = useState(location.state?.cosplan || {})
    // useEffect(() => {
    //     const fetchCosplanData = async () => {
    //         try {
    //             const response = await axiosReq.get("/cosplans/")
    //             setCosplanData(response.data.results)
    //         } catch (err) {
    //             console.error("Cosplay data fetch error:", err)
    //         }
    //     }
    //     fetchCosplanData()
    // }, [])


    // destructure form data
    console.log(cosplanData)
    const { cosplay, cosplan_task, cosplan_details, due_date } = cosplanData
    const [errors, setErrors] = useState({})

    const handleSubmitData = (event) => {
        setCosplanData({
            ...cosplanData,
            [event.target.name]: event.target.value
        })
    }

    const handleCancel = () => {
        navigate("/calendar")
    }

    const handleCosplanSubmit = async (event) => {
        event.preventDefault()
        console.log("Form submitted", cosplanData, cosplanData.id)
        setIsSubmitting(true)

        try {
            const formattedDueDate = format(new Date(due_date || initialDueDate), "yyyy-MM-dd")
            let response = undefined

            if (cosplanData.id !== undefined) {
                response = await axiosReq.put(
                    `/cosplans/${cosplanData.id}/`,
                    {
                        ...cosplanData,
                        cosplay: cosplay,
                        cosplan_task: cosplan_task,
                        cosplan_details: cosplan_details,
                        due_date: formattedDueDate
                    }
                )
            } else {
                console.log("I am here", cosplanData)
                response = await axiosReq.post(
                    "/cosplans/",
                    {
                        cosplay: cosplay,
                        cosplan_task: cosplan_task,
                        cosplan_details: cosplan_details,
                        due_date: formattedDueDate
                    }
                )
            }

            console.log("Response:", response)

            if (response.status === 201 || response.status === 200) {
                setShowSuccessMessage(true)
                // navigate to the calendar after successful creation and updating state
                setTimeout(() => {
                    navigate("/calendar")
                    setShowSuccessMessage(false)
                }, 5000)
            } else {
                console.error("Error creating CosPlan:", response.status, response.data)
                setErrors(response.data)
            }
        } catch (err) {
            console.error("Cosplan creation error:", err.response?.data)
            setErrors(err.response?.data)
        }
        setIsSubmitting(false)
    }


    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {showSuccessMessage ? (
                    <Success
                        message={cosplanData.id ? "Cosplan successfully updated!" : "CosPlan successfully created!"}
                        onDismiss={handleDismissMessage}
                    />
                ) : null}
                <form
                    method="POST"
                    onSubmit={handleCosplanSubmit}
                    className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                    <input type="hidden" name="id" value={cosplanData.id} />
                    <div className="px-4 py-6 sm:p-8">
                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Field wrapper */}
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="cosplay"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >Cosplay Character:</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            id="cosplay"
                                            name="cosplay"
                                            type="text"
                                            value={cosplay}
                                            disabled={showSuccessMessage || isSubmitting}
                                            onChange={handleSubmitData}
                                            required
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="The name of your cosplay character"
                                        />
                                    </div>
                                </div>
                                <label
                                    htmlFor="cosplan_task"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >Cosplan:</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            id="cosplan_task"
                                            name="cosplan_task"
                                            type="text"
                                            value={cosplan_task}
                                            disabled={showSuccessMessage || isSubmitting}
                                            onChange={handleSubmitData}
                                            required
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="The title of your cosplan task"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Field wrapper */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="cosplan_details"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >Cosplan Details:</label>
                                <div className="mt-2">
                                    <textarea
                                        id="cosplan_details"
                                        name="cosplan_details"
                                        value={cosplan_details}
                                        disabled={showSuccessMessage || isSubmitting}
                                        type="text"
                                        onChange={handleSubmitData}
                                        rows="3"
                                        placeholder="Plan your task here"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <p className="block text-sm font-medium leading-6 text-gray-900">
                                    Due Date: {initialDueDate ? format(new Date(initialDueDate), "dd/MM/yyyy") : "No date selected"}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Button wrapper */}
                    <div
                        className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"
                    >
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={showSuccessMessage || isSubmitting}
                            className="text-gray rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CosPlanForm