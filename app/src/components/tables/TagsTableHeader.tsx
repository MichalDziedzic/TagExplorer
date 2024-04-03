import React from "react"

interface TagsTableHeaderProps {
  headers: string[]
}

const TagsTableHeader: React.FC<TagsTableHeaderProps> = ({ headers }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {headers.map((header) => (
          <th
            key={header}
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TagsTableHeader
