import { Fragment } from 'react'
import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
    MapPinIcon,
} from '@heroicons/react/20/solid'
import { Menu, MenuItem, MenuItems, MenuButton, Transition } from '@headlessui/react'
import { startOfToday, startOfWeek, endOfMonth, endOfWeek, eachDayOfInterval, format } from 'date-fns'

const meetings = [
    {
        id: 1,
        date: 'January 10th, 2022',
        time: '5:00 PM',
        datetime: '2022-01-10T17:00',
        name: 'Leslie Alexander',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        location: 'Starbucks',
    },
]


// 

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Calendar() {

    // get todays date
    const todaysDate = startOfToday()

    /**
     * Use todaysDate to get the first week of the month and the last week of the month to calc date range of the month
     * to render the calendar. This is because the first week of a month often has dates from the previous month included,
     * and vice versa for the end of the month
     */

    const getCalendarMonth = () => {
        // first day of first week
        const firstCalendarDay = startOfWeek(todaysDate)
        // last day of the month
        const lastDayOfMonth = endOfMonth(todaysDate)
        // last DATE of calendar month shown
        const lastCalendarDay = endOfWeek(lastDayOfMonth)

        return eachDayOfInterval({
            start: firstCalendarDay,
            end: lastCalendarDay
        })
    }

    return (
        <div className="p-20">
            <h2 className="text-base font-semibold leading-6 text-gray-900">Upcoming meetings</h2>
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                    <div className="flex items-center text-gray-900">
                        <button
                            type="button"
                            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Previous month</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <div className="flex-auto text-sm font-semibold">January</div>
                        <button
                            type="button"
                            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Next month</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                        <div>M</div>
                        <div>T</div>
                        <div>W</div>
                        <div>T</div>
                        <div>F</div>
                        <div>S</div>
                        <div>S</div>
                    </div>
                    <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                        {getCalendarMonth().map((day, dayIdx) => {
                            return (
                                <button
                                    key={day.date}
                                    type="button"
                                    className='py-1.5 hover:bg-gray-100 focus:z-10'
                                    // className={classNames(
                                    //     'py-1.5 hover:bg-gray-100 focus:z-10',
                                    //     day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                                    //     (day.isSelected || day.isToday) && 'font-semibold',
                                    //     day.isSelected && 'text-white',
                                    //     !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                                    //     !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                                    //     day.isToday && !day.isSelected && 'text-indigo-600',
                                    //     dayIdx === 0 && 'rounded-tl-lg',
                                    //     dayIdx === 6 && 'rounded-tr-lg',
                                    //     dayIdx === days.length - 7 && 'rounded-bl-lg',
                                    //     dayIdx === days.length - 1 && 'rounded-br-lg'
                                    // )}
                                >
                                    
                                    <time
                                        dateTime={day.toString()}
                                        className={classNames(
                                            'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                                            day.isSelected && day.isToday && 'bg-indigo-600',
                                            day.isSelected && !day.isToday && 'bg-gray-900'
                                        )}
                                    >
                                        {day.toString()}
                                    </time>
                                </button>
                            )
                        })}
                    </div>
                    <button
                        type="button"
                        className="max-w-xs mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add cosplan
                    </button>
                </div>
                <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8 max-w-xl">
                    {meetings.map((meeting) => (
                        <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static">
                            <img src={meeting.imageUrl} alt="" className="h-14 w-14 flex-none rounded-full" />
                            <div className="flex-auto">
                                <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.name}</h3>
                                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                                    <div className="flex items-start space-x-3">
                                        <dt className="mt-0.5">
                                            <span className="sr-only">Date</span>
                                            <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </dt>
                                        <dd>
                                            <time dateTime={meeting.datetime}>
                                                {meeting.date} at {meeting.time}
                                            </time>
                                        </dd>
                                    </div>
                                    <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                                        <dt className="mt-0.5">
                                            <span className="sr-only">Location</span>
                                            <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </dt>
                                        <dd>{meeting.location}</dd>
                                    </div>
                                </dl>
                            </div>
                            <Menu as="div" className="absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:self-center">
                                <div>
                                    <MenuButton className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
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
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Edit
                                                    </a>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Cancel
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
