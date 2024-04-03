import { useTags } from "../hooks/useTags"
import { useTableSettingsStore } from "../store/useTableSettingsStore"
import TableControls from "../components/tables/TableControls"
import PaginationControl from "../components/PaginationControl"
import { TagsTable } from "../components/tables/TagsTable"

export const TagsExplorer = () => {
  const { page, pageSize, sortBy, sortOrder, setPage } = useTableSettingsStore()

  const { data } = useTags({
    page,
    pageSize,
    sortBy,
    sortOrder,
  })

  return (
    <>
      <div>
        <TableControls />
        <TagsTable />
        <PaginationControl
          page={page}
          setPage={setPage}
          hasMore={data?.has_more ?? false}
        />
      </div>
    </>
  )
}
