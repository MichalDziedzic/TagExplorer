import React from "react"
import SortingControl from "../SortingControl"
import PageSizeSelector from "../selects/PageSizeSelector"
import { useTableSettingsStore } from "../../store/useTableSettingsStore"

const TableControls: React.FC = () => {
  const { pageSize, setPageSize, sortBy, setSortBy, sortOrder, setSortOrder } =
    useTableSettingsStore()

  return (
    <div className="flex justify-between items-center mb-4">
      <SortingControl
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortByChange={setSortBy}
        onSortOrderChange={setSortOrder}
      />
      <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
    </div>
  )
}

export default TableControls
