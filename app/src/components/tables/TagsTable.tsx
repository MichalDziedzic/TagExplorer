import React from "react"
import TagsTableHeader from "./TagsTableHeader"
import TagsTableBody from "./TagsTableBody"
import { Tag } from "../../types/interfaces"

interface TagsTableProps {
  items: Tag[]
  headers?: string[]
}

export const TagsTable: React.FC<TagsTableProps> = ({
  items,
  headers = ["Nazwa Tagu", "Liczba Postów"],
}) => {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <TagsTableHeader headers={headers} />
        <TagsTableBody items={items} />
      </table>
    </div>
  )
}
