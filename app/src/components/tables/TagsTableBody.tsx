import React from "react"
import { Tag } from "../../types/interfaces" // Załóżmy, że Tag został odpowiednio zaimportowany

interface TagsTableBodyProps {
  items: Tag[]
}

const TagsTableBody: React.FC<TagsTableBodyProps> = ({ items }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {items.map((tag) => (
        <tr key={tag.name}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {tag.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {tag.count}
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default TagsTableBody
