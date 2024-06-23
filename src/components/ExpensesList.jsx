import { useState, useEffect } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { axiosReq } from "../api/axiosDefaults"
import { useCurrentUser } from "../contexts/CurrentUserContext"
import Success from "./alerts/Success"

function ExpensesList() {

    const location = useLocation()
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const handleDismissMessage = () => {
        setShowSuccessMessage(false)
    }

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
        cosplayer_id: currentUser?.pk
    })

    const { item_name, unit_price, quantity, product_link } = newExpenseData

    const [errors, setErrors] = useState({})

    // handles changes to input fields
    const handleExpenseChange = (event) => {
        event.preventDefault()
        setNewExpenseData({
            ...newExpenseData,
            cosplan_id: currentCosplan.id,
            cosplayer_id: currentUser?.pk,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        axiosReq.get(`/expenses/?cosplan_id=${id}`).then((response) => {
            setExpenses(response.data.results)
        })
    }, [id])

    const handleNewExpenseSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axiosReq.post(
                `/cosplans/${currentCosplan.id}/expenses/`,
                newExpenseData
            )
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

    const handleDeleteExpense = async (id) => {
        const proceed = confirm("Are you sure you wish to delete this expense?")
        if (!proceed) {
            return
        }
        try {
            await axiosReq.delete(
                `/cosplans/expenses/${id}/`
            )
            // updating existing expenses state by removing local entry after the delete is completed
            setExpenses(expenses.filter((expense) => expense.id !== id))
            setShowSuccessMessage(true)
            setTimeout(() => {
                setShowSuccessMessage(false)
            }, 5000)
            // clears errors if the expense was successfully deleted
            setErrors({})
        } catch (error) {
            console.error("Error deleting expense:", error.response?.data)
            setErrors(error.response?.data)
        }
    }

    return (
        <main className="relative mx-auto max-w-7xl bg-white rounded-xl overflow-hidden">
            {showSuccessMessage ? (
                <Success
                    message={"Expense successfully deleted!"}
                    onDismiss={handleDismissMessage}
                />
            ) : null}
            <div className="h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
                <img src="https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Glass of Euro coins and notes tipped over onto the floor, contents spilling out."
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
                                required
                                onChange={handleExpenseChange}
                                value={item_name}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Item Name"
                            />
                            <input
                                type="number"
                                name="unit_price"
                                required
                                onChange={handleExpenseChange}
                                value={unit_price}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Unit Price"
                            />
                            <input
                                type="number"
                                name="quantity"
                                required
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
                            {expenses.map((expense) => (<li
                                key={expense.id}
                                className="flex space-x-6 py-6 group">
                                <div className="flex-auto space-y-1">
                                    <h3 className="text-gray-900">
                                        <a href="#">{expense.item_name}</a>
                                    </h3>
                                    {expense.product_link !== "" ? <a href={expense.product_link} target="_blank">Click here to buy</a> : null}
                                </div>
                                <p className="flex-none font-medium text-gray-900">{expense.quantity} x €{expense.unit_price}</p>
                                <a
                                    className="hidden group-hover:inline-flex py-1 px-4 text-xs justify-center cursor-pointer hover:bg-error-100 border-2 hover:border-error-100 rounded-lg text-error-400 hover:text-error-500"
                                    onClick={() => handleDeleteExpense(expense.id)}
                                >
                                    remove
                                </a>
                            </li>))}
                        </ul>

                        <dl className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
                            <div className="flex items-center justify-between pt-6 text-gray-900">
                                <dt className="text-base">Total cost of item/s in this cosplay task</dt>
                                <dd className="text-base">€{expenses.reduce((acc, expense) => (acc + (expense.unit_price * expense.quantity)), 0)}</dd>
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