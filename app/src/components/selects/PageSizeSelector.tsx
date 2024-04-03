import { useTableSettingsStore } from "../../store/useTableSettingsStore"

const DEFAULT_PAGE_SIZE = 10
const PageSizeSelector: React.FC = () => {
  const { pageSize, setPageSize } = useTableSettingsStore()

  const handleChangePageSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = Number(event.target.value)
    setPageSize(newSize || DEFAULT_PAGE_SIZE)
  }

  return (
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
        className="ml-2 border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
      />
    </label>
  )
}

export default PageSizeSelector
