
export default function Example() {

  return (
    <fieldset>
      <legend className="sr-only">Cosplay expenses</legend>
      <div className="flex items-center space-x-3">
        <input
          id="cosplan"
          aria-describedby="cosplan-expense"
          name="cosplan"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <label htmlFor="unit-price-input" className="text-gray-500 mr-2 whitespace-nowrap">CosExpense:</label>
        <input
          type="text"
          id="item-name-input"
          className="font-medium text-gray-900 border rounded-md p-2"
          placeholder="Item name"
        />
        <div className="flex items-center">
          <label htmlFor="unit-price-input" className="text-gray-500 mr-2 whitespace-nowrap">Price:</label>
          <input
            type="number"
            id="unit-price-input"
            className="text-gray-900 border rounded-md p-2 w-16"
            min="0"
            step="0.01"
          />
        </div>
        <label htmlFor="unit-price-input" className="text-gray-500 mr-2 whitespace-nowrap">Link to product(optional):</label>
        <input
          type="url"
          id="product-link-input"
          className="text-gray-500 border rounded-md p-2"
          placeholder="Product Link"
        />
      </div>
    </fieldset>

  )
}
