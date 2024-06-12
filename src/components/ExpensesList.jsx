import { Link } from "react-router-dom";

function ExpensesList() {
    return (
        <main className="relative mx-auto max-w-7xl bg-white rounded-xl overflow-hidden">
            <div className="h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
                <img src="https://tailwindui.com/img/ecommerce-images/confirmation-page-06-hero.jpg" alt="TODO" className="h-full w-full object-cover object-center" />
            </div>

            <div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
                    <div className="lg:col-start-2">
                        <h1 className="text-sm font-medium text-indigo-600">Expense list for</h1>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Cosplay plan name</p>

                        <ul role="list" className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500">

                            {/* Expense item... */}
                            <li className="flex space-x-6 py-6">
                                <img src="https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg" alt="Model wearing men&#039;s charcoal basic tee in large." className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center" />
                                <div className="flex-auto space-y-1">
                                    <h3 className="text-gray-900">
                                        <a href="#">Basic Tee</a>
                                    </h3>
                                    <p>Charcoal</p>
                                    <p>L</p>
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
    );
}

export default ExpensesList;