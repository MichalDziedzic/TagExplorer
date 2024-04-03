import { useTableSettingsStore } from "../store/useTableSettingsStore"
import { SortBy, SortOrder } from "../types/types"

const SortingControl = () => {
  const { setSortBy, setSortOrder, sortBy, sortOrder } = useTableSettingsStore()

  return (
    <div className="flex space-x-2">
      <div>
        <label
          htmlFor="sortBy"
          className="block text-sm font-medium text-gray-700"
        >
          Sortuj według:
        </label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortBy)}
          className="mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="name">Nazwa</option>
          <option value="popular">Popularność</option>
          <option value="activity">Aktywność</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="sortOrder"
          className="block text-sm font-medium text-gray-700"
        >
          Kierunek:
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="asc">Rosnąco</option>
          <option value="desc">Malejąco</option>
        </select>
      </div>
    </div>
  )
}

export default SortingControl
