import React from "react"
import SortingControl from "../SortingControl"
import PageSizeSelector from "../selects/PageSizeSelector"

const TableControls: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <SortingControl />
      <PageSizeSelector />
    </div>
  )
}

export default TableControls
