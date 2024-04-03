import { useTags } from "../../hooks/useTags"
import { useTableSettingsStore } from "../../store/useTableSettingsStore"
import TagsTableHeader from "./TagsTableHeader"
import TagsTableBody from "./TagsTableBody"

export const TagsTable = () => {
  const { page, pageSize, sortBy, sortOrder } = useTableSettingsStore()

  const { data } = useTags({
    page,
    pageSize,
    sortBy,
    sortOrder,
  })

  const tagsTableHeaders = ["Nazwa Tagu", "Liczba Postów"]

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <TagsTableHeader headers={tagsTableHeaders} />
        <TagsTableBody items={data?.items || []} />
      </table>
    </div>
  )
}
