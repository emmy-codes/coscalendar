import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react"

function Success({ message }) {

    // State to control visibility
    const [isVisible, setIsVisible] = useState(true)

    // causing success message to close after 5 seconds or on click
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 5000) // Hide the message after 5 seconds
        return () => clearTimeout(timer)
    }, [])

    // closes success message if the user clicks the X
    const handleDismiss = () => {
        setIsVisible(false)
    }

    return (
        isVisible && (
            <div className="rounded-md bg-orchid-50 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <CheckCircleIcon
                            className="h-5 w-5 text-orchid-400"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="ml-3">
                        {/* dynamically change message in respective components Success is used in */}
                        <p className="text-sm font-medium text-orchid-800">{message}</p>
                    </div>
                    <div className="ml-auto pl-3">
                        <div className="-mx-1.5 -my-1.5">
                            <button
                                type="button"
                                onClick={handleDismiss}
                                className="inline-flex rounded-md bg-orchid-50 p-1.5 text-orchid-500 hover:bg-orchid-100 focus:outline-none focus:ring-2 focus:ring-orchid-600 focus:ring-offset-2 focus:ring-offset-orchid-50"
                            >
                                <span className="sr-only">Dismiss</span>
                                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>)
    )
}

export default Success