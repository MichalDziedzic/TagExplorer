import React from "react"

interface PageSizeSelectorProps {
  pageSize: number
  setPageSize: (size: number) => void
}

const DEFAULT_PAGE_SIZE = 10

const PageSizeSelector: React.FC<PageSizeSelectorProps> = ({
  pageSize,
  setPageSize,
}) => {
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
        className="ml-2 border-gray-300 shadow-sm  rounded-md focus:outline-none"
      />
    </label>
  )
}

export default PageSizeSelector
