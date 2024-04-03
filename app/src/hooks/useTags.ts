import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { TagsQueryParams, TagsResponse } from "../types/interfaces"

const fetchTags = async ({
  page,
  pageSize,
  sortBy,
  sortOrder,
}: TagsQueryParams): Promise<TagsResponse> => {
  const response = await fetch(
    `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${sortOrder}&sort=${sortBy}&site=stackoverflow`
  )

  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return response.json()
}

export function useTags({
  page,
  pageSize,
  sortBy,
  sortOrder,
}: TagsQueryParams): UseQueryResult<TagsResponse, Error> {
  return useQuery({
    queryKey: ["tags", page, pageSize, sortBy, sortOrder],
    queryFn: () => fetchTags({ page, pageSize, sortBy, sortOrder }),
  })
}
