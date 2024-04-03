import React from "react"
import ActionButton from "./buttons/ActionButton"

interface PaginationControlProps {
  page: number
  setPage: (page: number) => void
  hasMore: boolean
}

const PaginationControl: React.FC<PaginationControlProps> = ({
  page,
  setPage,
  hasMore,
}) => {
  const handleNextPage = () => setPage(page + 1)
  const handlePreviousPage = () => setPage(page - 1)

  return (
    <div className="py-4 flex justify-center items-center space-x-4">
      <ActionButton
        label="Poprzednia"
        onClick={handlePreviousPage}
        disabled={page === 1}
      />
      <span>Strona {page}</span>
      <ActionButton
        label="Następna"
        onClick={handleNextPage}
        disabled={!hasMore}
      />
    </div>
  )
}

export default PaginationControl
