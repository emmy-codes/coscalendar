import { Fragment, useEffect, useState } from "react"
import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
    MapPinIcon,
} from "@heroicons/react/20/solid"
import { Menu, MenuItem, MenuItems, MenuButton, Transition } from "@headlessui/react"
import {
    startOfToday,
    startOfWeek,
    startOfMonth,
    endOfMonth,
    endOfWeek,
    eachDayOfInterval,
    format,
    subMonths,
    addMonths
} from "date-fns"
import { Link } from "react-router-dom"
import { axiosReq } from "../api/axiosDefaults"
import { useCurrentUser } from "../contexts/CurrentUserContext"

// static data to be replaced later on
const cosplan = [
    {
        id: 1,
        date: "June 10th, 2024",
        time: "5:00 PM",
        datetime: "2024-10-10T17:00",
        cosplayName: "Bo Katan",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        plan: "Finish gluing helmet",
    },
    {
        id: 2,
        date: "June 15th, 2024",
        time: "5:00 PM",
        datetime: "2024-05-15T17:00",
        cosplayName: "Bo Katan",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        plan: "Prime helmet for painting",
    },
    {
        id: 3,
        date: "July 2nd, 2024",
        time: "5:00 PM",
        datetime: "2024-07-02T17:00",
        cosplayName: "Pink Mercy",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        plan: "Sand off old paint",
    },
]

// for saving cosplan data


function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function Calendar() {
    // state to store fetched cosplan data
    const [cosplanRender, setCosplanRender] = useState([])

    // fetch cosplan data for a specific user imported from CurrentUserContext
    const currentUser = useCurrentUser()

    // get todays date
    const todaysDate = startOfToday()
    // Format today"s date for easier comparisson
    const formatToday = format(todaysDate, "dd-MM-yyyy")

    // Create a map to store the number of events for each day
    // This map will facilitate the check for events on any given day
    // instead of iterating over the cosplan list every time.
    // example of the map:
    // {
    //     "10-06-2024": 1,
    //     "15-06-2024": 1
    // }
    const eventDayMap = {}


    const fetchCosplanData = async () => {
        try {
            const response = await axiosReq.get("/cosplans/", {
                params: {
                    cosplayer: currentUser?.user_profile?.id
                }
            })
            setCosplanRender(response.data.results)
            console.log(response)
        } catch (err) {
            console.error("Error fetching CosPlan data:", err)
        }
        
    }

    useEffect(() => {
    if (currentUser) {
        fetchCosplanData()
    }
    }, [currentUser])

    // iterate over the cosplan list and count the number of events for each day
    // for (let plan of cosplan) {
    //     // Format the event date for easier comparisson
    //     const formattedEventDate = format(plan.datetime, "dd-MM-yyyy")
    //     // Check if the event date is already in the map otherwise start the count at 0
    //     const eventCount = eventDayMap[formattedEventDate] || 0

    //     // Add 1 to the event count for the current day
    //     eventDayMap[formattedEventDate] = eventCount + 1
    // }

    // First day of the month. And it changes when
    // the user clicks the next or previous month button
    const [currentMonth, setCurrentMonth] = useState(
        startOfMonth(todaysDate)
    )

    // Selected date from the calendar. It is today's date by default
    const [selectedDate, setSelectedDate] = useState(todaysDate)

    /**
     * Use todaysDate to get the first week of the month and the last week of the month to calc date range of the month
     * to render the calendar. This is because the first week of a month often has dates from the previous month included,
     * and vice versa for the end of the month
     */

    const getCalendarMonth = () => {
        // first day of first week
        const firstCalendarDay = startOfWeek(currentMonth)
        // last DATE of calendar month shown
        const lastCalendarDay = endOfWeek(endOfMonth(currentMonth))

        // get all days in the calendar month
        return eachDayOfInterval({
            start: firstCalendarDay,
            end: lastCalendarDay
        })
    }

    // Subtracts a month from the current month using the date-fns/subMonths function
    const handlePreviousMonth = () => {
        setCurrentMonth((prevMonth) => subMonths(prevMonth, 1))
    }

    // Adds a month to the current month using the date-fns/addMonths function
    const handleNextMonth = () => {
        setCurrentMonth((nextMonth) => addMonths(nextMonth, 1))
    }

    // formatting date data to provide the word of the current month being viewed
    const formatMonth = format(currentMonth, "MMMM")

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold shadow leading-6 w-fit text-chetwode-blue-900 p-2 ">Cosplay plans for {format(selectedDate, "dd MMMM")}</h2>
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                    <div className="flex items-center text-chetwode-blue-900">
                        <button
                            onClick={handlePreviousMonth}
                            type="button"
                            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-chetwode-blue-400 hover:text-chetwode-blue-500"
                        >
                            <span className="sr-only">Previous month</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <div className="flex-auto text-sm font-semibold">{formatMonth}</div>
                        <button
                            onClick={handleNextMonth}
                            type="button"
                            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-chetwode-blue-400 hover:text-chetwode-blue-500"
                        >
                            <span className="sr-only">Next month</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-black font-bold">
                        <div>S</div>
                        <div>M</div>
                        <div>T</div>
                        <div>W</div>
                        <div>T</div>
                        <div>F</div>
                        <div>S</div>
                    </div>
                    <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-chetwode-blue-200 text-sm shadow ring-1 ring-black">
                        {getCalendarMonth().map((day) => {

                            {/*
                        formatting the date data to provide the days in the month
                        */}
                            // format the current iteration day to be displayed correctly
                            const formatDay = format(day, "dd")
                            // format the current iteration day to be compared to the selected date
                            const formatDate = format(day, "dd-MM-yyyy")

                            // format the selected date to be compared to the current iteration day
                            const formatSelected = format(selectedDate, "dd-MM-yyyy")

                            // check if the current iteration day is selected
                            const isSelected = formatSelected === formatDate

                            // check if the current iteration day is today
                            const isToday = formatToday === formatDate

                            return (
                                <button
                                    onClick={() => setSelectedDate(day)}
                                    key={day.date}
                                    type="button"
                                    className={classNames(
                                        "relative py-1.5 hover:bg-white focus:z-10 hover:ring-2 ring-blue rounded-full",
                                        (isSelected || isToday) && "font-semibold",
                                        isSelected && "text-white",
                                        !isSelected && "text-gray-900 hover:bg-white",
                                        isToday && !isSelected && "text-indigo-600",
                                        isSelected && isToday && "bg-chetwode-blue-600 hover:text-chetwode-blue-600",
                                        isSelected && !isToday && "bg-chetwode-blue-900 hover:text-chetwode-blue-900"
                                    )}
                                >

                                    <time
                                        dateTime={formatDay}
                                        className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                                    >
                                        {formatDay}
                                    </time>
                                    {
                                        // check if there are events on the current iteration day to show a dot under
                                        // the day number
                                        eventDayMap[formatDate] > 0 && (
                                            <span className="text-5xl absolute w-7 left-3 bottom-0">.</span>
                                        )
                                    }
                                </button>
                            )
                        })}
                    </div>
                    <Link
                        to="/cosplan/new"
                        state={{ selectedDate }} // not using selectedDate: selectedDate but the shorthand form of it
                        className="max-w-xs mt-8 w-full rounded-md bg-chetwode-blue-900 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-chetwode-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add cosplan
                    </Link>
                </div>
                <ol className="mt-4 divide-y divide-chetwode-blue-100 text-sm leading-6 lg:col-span-7 xl:col-span-8 max-w-xl">
                    {
                        // filter the cosplan list to show only the events for the selected date
                        cosplanRender.filter((plan) => {
                            const planDate = new Date(plan.datetime)
                            const formattedPlanDate = format(planDate, "dd-MM-yyyy")

                            return formattedPlanDate === format(selectedDate, "dd-MM-yyyy")
                        }).map((event) => (
                            <li key={event.id} className="relative flex space-x-6 py-6 xl:static">
                                <img src={event.imageUrl} alt="" className="h-14 w-14 flex-none rounded-full" />
                                <div className="flex-auto">
                                    <h3 className="pr-10 font-semibold text-black xl:pr-0">{event.cosplayName}</h3>
                                    {/*
                                    dlist covers the deadline, time and plan (to update when cosplay plan is set up)
                                */}
                                    <dl className="mt-2 flex flex-col text-black xl:flex-row">
                                        <div className="flex items-start space-x-3">
                                            <dt className="mt-0.5">
                                                {/* sr-only is screen reader accessibility improvements */}
                                                <span className="sr-only">Deadline</span>
                                                <CalendarIcon className="h-5 w-5 text-black" aria-hidden="true" />
                                            </dt>
                                            <dd>
                                                <time dateTime={event.datetime}>
                                                    {event.date} at {event.time}
                                                </time>
                                            </dd>
                                        </div>
                                        <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-black xl:border-opacity-50 xl:pl-3.5">
                                            <dt className="mt-0.5">
                                                <span className="sr-only">Plan</span>
                                                <MapPinIcon className="h-5 w-5 text-pink" aria-hidden="true" />
                                            </dt>
                                            <dd>{event.plan}</dd>
                                        </div>
                                    </dl>
                                </div>
                                <Menu as="div" className="absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:self-center">
                                    <div>
                                        <MenuButton className="-m-2 flex items-center rounded-full p-2 text-chetwode-blue-500 hover:text-chetwode-blue-600">
                                            <span className="sr-only">Open options</span>
                                            <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                                        </MenuButton>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <MenuItems className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <MenuItem>
                                                    {({ active }) => (
                                                        <Link
                                                            to={`/cosplan/edit/${event.id}`}
                                                            state={{ cosplan: event }}
                                                            className={classNames(
                                                                active ? "bg-chetwode-blue-100 text-chetwode-blue-900" : "text-chetwode-blue-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            Edit
                                                        </Link>
                                                    )}
                                                </MenuItem>
                                                <MenuItem>
                                                    {({ active }) => (
                                                        <Link
                                                            to={`/cosplan/${event.id}/expenses/`}
                                                            state={{ cosplan: event }}
                                                            className={classNames(
                                                                active ? "bg-chetwode-blue-100 text-chetwode-blue-900" : "text-chetwode-blue-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            Expenses
                                                        </Link>
                                                    )}
                                                </MenuItem>
                                                {/* changing to delete and adding functionality */}
                                                <MenuItem>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? "bg-chetwode-blue-100 text-chetwode-blue-900" : "text-chetwode-blue-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            Delete
                                                        </a>
                                                    )}
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </Transition>
                                </Menu>
                            </li>
                        ))}
                </ol>
            </div>
        </div>
    )
}