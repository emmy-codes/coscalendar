import { CheckCircleIcon, XMarkIcon, XCircleIcon } from '@heroicons/react/20/solid'

export default function ErrorAlert({ errors, onDismiss }) {
    let errorMessages = []
    for (let error in errors) {
        errorMessages = [...errorMessages, ...errors[error]]
    }

    return (
        <div className="rounded-md bg-red-50 p-4 bg-error-200 mx-auto w-8/12 flex items-center">
            <div className="flex-shrink-0">
                <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
                
               {
                errorMessages.map((error) => (
                    <div className="ml-3">
                        <p className="text-sm font-medium text-red-800">{error}</p>
                    </div>
                ))
               }    
            </div>
            <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                    <button
                        type="button"
                        className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                        onClick={onDismiss}
                    >
                        <span className="sr-only">Dismiss</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    )
}