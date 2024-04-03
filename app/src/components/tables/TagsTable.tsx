import { useTags } from "../../hooks/useTags"
import { useTableSettingsStore } from "../../store/useTableSettingsStore"
import TableControls from "./TableControls"
import PaginationControl from "../PaginationControl"
import TagsTableHeader from "./TagsTableHeader"
import TagsTableBody from "./TagsTableBody"
import LoadingIndicator from "../LoadingIndicator"
import ErrorDisplay from "../ErrorDisplay"

export const TagsTable = () => {
  const { page, pageSize, sortBy, sortOrder, setPage } = useTableSettingsStore()

  const { data, isLoading, error } = useTags({
    page,
    pageSize,
    sortBy,
    sortOrder,
  })

  const tagsTableHeaders = ["Nazwa Tagu", "Liczba Postów"]

  if (isLoading) return <LoadingIndicator />

  if (error) return <ErrorDisplay message={error.message} />

  return (
    <div>
      <TableControls />
      <table className="min-w-full divide-y divide-gray-200">
        <TagsTableHeader headers={tagsTableHeaders} />
        <TagsTableBody items={data?.items || []} />
      </table>
      <PaginationControl
        page={page}
        setPage={setPage}
        hasMore={data?.has_more ?? false}
      />
    </div>
  )
}
