import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { axiosReq } from "../api/axiosDefaults"
import { useCurrentUser } from "../contexts/CurrentUserContext"

function ExpensesList() {

    const navigate = useNavigate()
    const location = useLocation()


    const { id } = useParams()

    // state variables that manage expenses3
    const [expenses, setExpenses] = useState([])
    const currentUser = useCurrentUser()

    const currentCosplan = location.state?.cosplan
    const [newExpenseData, setNewExpenseData] = useState({
        item_name: "",
        unit_price: "",
        quantity: "",
        product_link: "",
        cosplan_id: currentCosplan.id,
        cosplayer_id: currentUser.pk
    })

    const { item_name, unit_price, quantity, product_link } = newExpenseData

    const [errors, setErrors] = useState({})

    // handles changes to input fields
    const handleExpenseChange = (event) => {
        event.preventDefault()
        setNewExpenseData({
            ...newExpenseData,
            [event.target.name]: event.target.value
        })
    }

    // if (currentUser && cosplay_name) {
    //     fetchExpensesData();
    // }

    const handleNewExpenseSubmit = async (event) => {
        event.preventDefault()
        try {
            console.log(newExpenseData)
            const response = await axiosReq.post(
                `/cosplans/${currentCosplan.id}/expenses/`,
                newExpenseData
            )
            console.log("successesz")
            // updating existing expenses state
            setExpenses([response.data, ...expenses])
            setNewExpenseData({
                item_name: "",
                unit_price: "",
                quantity: "",
                product_link: "",
            })
            // clears errors if the expense was successfully created
            setErrors({})
        } catch (error) {
            console.error("Error creating expense:", error.response?.data)
            setErrors(error.response?.data)
        }
    }

    return (
        <main className="relative mx-auto max-w-7xl bg-white rounded-xl overflow-hidden">
            <div className="h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
                <img src="https://tailwindui.com/img/ecommerce-images/confirmation-page-06-hero.jpg" alt="TODO"
                    className="h-full w-full object-cover object-center" />
            </div>

            <div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
                    <div className="lg:col-start-2">
                        <h1 className="text-lg font-medium text-indigo-600">Expense list for</h1>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">{currentCosplan.cosplay || "Unknown Cosplay"}</p>
                        <form className="mt-6 space-y-6"
                            onSubmit={handleNewExpenseSubmit}>
                            <input
                                type="text"
                                name="item_name"
                                onChange={handleExpenseChange}
                                value={item_name}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Item Name"
                            />
                            <input
                                type="number"
                                name="unit_price"
                                onChange={handleExpenseChange}
                                value={unit_price}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Unit Price"
                            />
                            <input
                                type="number"
                                name="quantity"
                                onChange={handleExpenseChange}
                                value={quantity}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Quantity"
                            />
                            <input
                                type="url"
                                name="product_link"
                                onChange={handleExpenseChange}
                                value={product_link}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Product Link (optional)"
                            />
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Add Expense
                            </button>
                        </form>
                        <ul role="list" className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500">

                            {/* Expense item... */}
                            <li className="flex space-x-6 py-6">
                                <img src="https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg" alt="Model wearing men&#039;s charcoal basic tee in large." className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center" />
                                <div className="flex-auto space-y-1">
                                    <h3 className="text-gray-900">
                                        <a href="#">Basic Tee</a>
                                    </h3>
                                    <p>Charcoal</p>
                                </div>
                                <p className="flex-none font-medium text-gray-900">€36.00</p>
                            </li>
                        </ul>

                        <dl className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
                            <div className="flex items-center justify-between pt-6 text-gray-900">
                                <dt className="text-base">Total</dt>
                                <dd className="text-base">€86.40</dd>
                            </div>
                        </dl>

                        <div className="mt-16 border-t border-gray-200 py-6 text-right">
                            <Link to="/calendar" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Back to calendar
                                <span aria-hidden="true"> &rarr;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ExpensesList