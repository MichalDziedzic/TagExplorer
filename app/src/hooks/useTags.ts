import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { TagsQueryParams, TagsResponse } from "../types/interfaces"

const fetchTags = async ({
  page,
  pageSize,
  sortBy,
  sortOrder,
}: TagsQueryParams): Promise<TagsResponse> => {
  try {
    const response = await fetch(
      `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${sortOrder}&sort=${sortBy}&site=stackoverflow`
    )

    if (!response.ok) {
      const errorResponse = await response.json()
      throw new Error(errorResponse.error_message || "Unknown error occurred")
    }

    return await response.json()
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error("Unknown error occurred")
    }
  }
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
