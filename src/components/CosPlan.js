import React from 'react'

function CosPlan() {
    return (
        <div>
            <form
            class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
            >
            <div class="px-4 py-6 sm:p-8">
                <div
                    class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                >
                    {/* Field wrapper */}
                    <div class="sm:col-span-4">
                        <label
                            for="cosplan"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >Cosplan:</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                            >
                                <input
                                    type="text"
                                    name="cosplan"
                                    id="cosplan"
                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="The title of your cosplan task"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Field wrapper */}
                    <div class="col-span-full">
                        <label
                            for="details"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >Cosplan details:</label>
                        <div class="mt-2">
                            <textarea
                                id="details"
                                name="details"
                                rows="3"
                                placeholder="Plan your task here"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                    </div>                    
                    {/*  Field wrapper */}
                    <div class="col-span-full">
                        <label id="listbox-label" class="sr-only">
                            Change published status
                        </label>
                        <div class="relative">
                            <button
                                type="button"
                                class="inline-flex items-center gap-x-1.5 rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-800 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-50"
                                aria-haspopup="listbox"
                                aria-expanded="true"
                                aria-labelledby="listbox-label"
                            >
                                <p class="text-sm font-semibold">08 May</p>
                                <svg
                                    class="h-3 w-3"
                                    viewBox="0 0 12 8"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.667"
                                        d="m1 1.5 5 5 5-5"
                                    ></path>
                                </svg>
                            </button>
                            {/* Calendar picker div, use hidden according to state */}
                            <div
                                class="hidden absolute left-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white px-4 pt-4 pb-2 shadow-lg ring-1 ring-black ring-opacity-5 transition duration-150 ease-in focus:outline-none opacity-100"
                            >
                                <div class="flex items-center">
                                    <h2
                                        class="flex-auto text-sm font-semibold text-gray-900"
                                    >
                                        May
                                    </h2>
                                    <button
                                        type="button"
                                        disabled=""
                                        class="-my-1.5 flex flex-none items-center justify-center rounded-full p-1.5 text-gray-400 hover:bg-gray-400 hover:text-gray-50 active:bg-white active:text-gray-400 active:ring-4 active:ring-gray-100 disabled:bg-white disabled:text-gray-300 disabled:ring-0"
                                    >
                                        <span class="sr-only">Previous month</span><svg
                                            class="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg></button>
                                        <button
                                        type="button"
                                        class="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center rounded-full p-1.5 text-gray-400 hover:bg-gray-400 hover:text-gray-50 active:bg-white active:text-gray-400 active:ring-4 active:ring-gray-100"
                                    >
                                        <span class="sr-only">Next month</span><svg
                                            class="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    class="mt-10 grid grid-cols-7 text-center text-sm font-medium leading-6 text-gray-500"
                                >
                                    <div>S</div>
                                    <div>M</div>
                                    <div>T</div>
                                    <div>W</div>
                                    <div>T</div>
                                    <div>F</div>
                                    <div>S</div>
                                </div>
                                <div
                                    class="mt-2 grid grid-cols-7 text-sm 2024-05-08"
                                >
                                    <div class="group py-1 disabled dayInCurrMonth">
                                        <button
                                            type="button"
                                            disabled=""
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-400 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-04-28">28</time>
                                        </button>
                                    </div>
                                    <div class="group py-1 disabled dayInCurrMonth">
                                        <button
                                            type="button"
                                            disabled=""
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-400 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-04-29">29</time>
                                        </button>
                                    </div>
                                    <div class="group py-1 disabled dayInCurrMonth">
                                        <button
                                            type="button"
                                            disabled=""
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-400 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-04-30">30</time>
                                        </button>
                                    </div>
                                    <div class="group py-1 disabled">
                                        <button
                                            type="button"
                                            disabled=""
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-01">1</time>
                                        </button>
                                    </div>
                                    <div class="group py-1 disabled">
                                        <button
                                            type="button"
                                            disabled=""
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-02">2</time>
                                        </button>
                                    </div>
                                    <div class="group py-1 disabled">
                                        <button
                                            type="button"
                                            disabled=""
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-03">3</time>
                                        </button>
                                    </div>
                                    <div class="group py-1 disabled">
                                        <button
                                            type="button"
                                            disabled=""
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-04">4</time>
                                        </button>
                                    </div>
                                    <div class="group py-1 today">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 font-semibold group-[.today]:border group-[.today]:border-primary-800 group-[.today]:text-primary-800 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-05">5</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-06">6</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-07">7</time>
                                        </button>
                                    </div>
                                    <div class="group py-1 selected">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 bg-gray-600 font-semibold group-[.today.selected]:border-primary-600 group-[.today.selected]:text-white group-[.selected]:text-white disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-08">8</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-09">9</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-10">10</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-11">11</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-12">12</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-13">13</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-14">14</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-15">15</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-16">16</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-17">17</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-18">18</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-19">19</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-20">20</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-21">21</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-22">22</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-23">23</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-24">24</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-25">25</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-26">26</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-27">27</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-28">28</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-29">29</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-30">30</time>
                                        </button>
                                    </div>
                                    <div class="group py-1">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-600 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-05-31">31</time>
                                        </button>
                                    </div>
                                    <div class="group py-1 dayInCurrMonth">
                                        <button
                                            type="button"
                                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-normal text-gray-400 group-[:not(.today.selected,.selected,.disabled)]:hover:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-white"
                                        >
                                            <time datetime="2024-06-01">1</time>
                                        </button>
                                    </div>
                                </div>
                                <button class="sr-only" aria-hidden="true"></button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* Button wrapper */}
            <div
                class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"
            >
                <button
                    type="button"
                    class="text-sm font-semibold leading-6 text-gray-900"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    class="text-gray rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form></div>
    )
}

export default CosPlan