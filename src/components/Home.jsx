import React, { useEffect, useState } from "react"
import Success from "./alerts/Success"
import { useLocation, useNavigate } from "react-router-dom"

const features = [
    {
        name: "CosCalendar",
        description:
            "Our cosplay calendar is designed with your success in mind - Simply select a date to add a to-do plan for your cosplay, and easily stay on top of your progress!",
        imageSrc: "https://i0.wp.com/picjumbo.com/wp-content/uploads/calendar-app-business-time-management-workspace.jpg?w=2210&quality=70g",
        imageAlt: "A desk setup with keyboard, phone, tablet and notepad. The tablet shows a calendar app",
    },
    {
        name: "CosExpenses",
        description:
            "The expenses tracker is great for planning items you need to buy for your cosplay, as well as tracking the total amount you've spent on certain items for each cosplay.",
        imageSrc: "https://i0.wp.com/picjumbo.com/wp-content/uploads/christmas-budget-money-expenses-shopping-free-photo.jpg?w=2210&quality=70",
        imageAlt: "Jar of coins on a table in focus, with a blurred background with fairy lights.",
    },
]


function FeatureImage(props) {
    const { feature } = props

    return (<div className="col-span-7">
        <div className="overflow-hidden rounded-lg bg-gray-100">
            <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center max-h-96 w-full" />
        </div>
    </div>)
}

function FeatureText(props) {
    const { feature } = props

    return (<div className="col-span-5">
        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
    </div>)
}

export default function Home() {
    const navigate = useNavigate()
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const location = useLocation()

    useEffect(() => {
        // checks if there's a success message in the locations state
        if (location.state && location.state.showSuccess) {
            setShowSuccessMessage(true)
        }
    }, [location, navigate])

    const handleDismissMessage = () => {
        setShowSuccessMessage(false)
    }

    return (
        <div>
            {/* login success message and welcome */}
            {location.state?.showSuccess ? (
                <Success message={location.state.message || "Success!"} onDismiss={handleDismissMessage} />
            ) : null}
            <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to CosCalendar planning and expenses tracker!</h2>
                    <p className="mt-4 text-gray-500">
                        Here is the home for staying on top of your cosplays - both keeping track of time with our cosplay calendar, and with expenses
                        tracking designed to provide an overview of the costs involved in each cosplay.<br /><a
                            href="/login"
                            className="underline rounded text-base font-semibold leading-7 hover:bg-orchid-200"
                        >
                            Log in
                        </a> to access all the features!
                    </p>
                </div>

                <div className="mt-16 space-y-16">
                    {features.map((feature, featureIdx) => (
                        <div
                            key={feature.name}
                            className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                        >
                            {featureIdx % 2 === 0 ? (
                                <>
                                    <FeatureText feature={feature} />
                                    <FeatureImage feature={feature} />
                                </>
                            ) : (
                                <>
                                    <FeatureImage feature={feature} />
                                    <FeatureText feature={feature} />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
