import { useTags } from "../hooks/useTags"
import { useTableSettingsStore } from "../store/useTableSettingsStore"
import TableControls from "../components/tables/TableControls"
import PaginationControl from "../components/PaginationControl"
import { TagsTable } from "../components/tables/TagsTable"
import LoadingIndicator from "../components/LoadingIndicator"
import ErrorDisplay from "../components/ErrorDisplay"

export const TagsExplorer = () => {
  const { page, pageSize, sortBy, sortOrder, setPage } = useTableSettingsStore()
  const { data, isLoading, error } = useTags({
    page,
    pageSize,
    sortBy,
    sortOrder,
  })

  return (
    <div className="flex flex-col items-center py-4">
      <div className="w-full max-w-4xl px-4">
        <TableControls />
      </div>

      {isLoading ? (
        <LoadingIndicator />
      ) : error ? (
        <ErrorDisplay message={error.message} />
      ) : (
        <>
          <div className="w-full max-w-4xl px-4 my-4">
            <TagsTable items={data?.items || []} />
          </div>

          <div className="w-full max-w-4xl px-4">
            <PaginationControl
              page={page}
              setPage={setPage}
              hasMore={data?.has_more ?? false}
            />
          </div>
        </>
      )}
    </div>
  )
}
