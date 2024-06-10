import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const features = [
    {
        name: "CosCalendar",
        description:
            "Our cosplay calendar is designed with your success in mind - Simply select a date to add a to-do plan for your cosplay, and easily stay on top of your progress!",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg",
        imageAlt: "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
    },
    {
        name: "CosExpenses",
        description:
            "The expenses tracker is great for planning items you need to buy for your cosplay, as well as tracking the total amount you've spent on certain items for each cosplay.",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg",
        imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const navigate = useNavigate();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // checks if there's a success message in the locations state
        if (location.state && location.state.showSuccess) {
            setShowSuccessMessage(true);
        }
    }, [location, navigate]);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to CosCalendar planning and expenses tracker!</h2>
                    <p className="mt-4 text-gray-500">
                        Here is the home for staying on top of your cosplays - both keeping track of time with our cosplay calendar, and with expenses tracking designed to provide an overview of the costs involved in each cosplay.
                    </p>
                </div>

                <div className="mt-16 space-y-16">
                    {features.map((feature, featureIdx) => (
                        <div
                            key={feature.name}
                            className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                        >
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                                    'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                                )}
                            >
                                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                            </div>
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                                    'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                                )}
                            >
                                <div className="overflow-hidden rounded-lg bg-gray-100">
                                    <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
