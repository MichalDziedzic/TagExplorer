import React from "react"
import { useTags } from "../hooks/useTags"
import { useTableSettingsStore } from "../store/useTableSettingsStore"
import SortingControl from "./SortingControl"

export const TagsTable = () => {
  const { page, pageSize, sortBy, sortOrder, setPage, setPageSize } =
    useTableSettingsStore()

  const { data, isLoading, error } = useTags({
    page,
    pageSize,
    sortBy,
    sortOrder,
  })

  const handleChangePageSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = Number(event.target.value)
    setPageSize(newSize || 10) // Jeśli wartość jest nieprawidłowa, przywróć domyślną
  }

  if (isLoading) return <div className="text-center py-4">Loading...</div>
  if (error instanceof Error)
    return (
      <div className="text-red-500 text-center py-4">
        Error: {error.message}
      </div>
    )

  const handleNextPage = () => setPage(page + 1)
  const handlePreviousPage = () => setPage(page - 1)

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="pageSize"
          className="block text-sm font-medium text-gray-700"
        >
          Elementy na stronie:
          <input
            type="number"
            id="pageSize"
            value={pageSize}
            onChange={handleChangePageSize}
            className="ml-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
          />
        </label>
        <SortingControl />
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nazwa Tagu
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Liczba Postów
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.items.map((tag) => (
            <tr key={tag.name}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {tag.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {tag.count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="py-4 flex justify-center items-center space-x-4">
        <button
          onClick={handlePreviousPage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={page === 1}
        >
          Poprzednia
        </button>
        <span>Strona {page}</span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={!data || !data.has_more}
        >
          Następna
        </button>
      </div>
    </div>
  )
}
