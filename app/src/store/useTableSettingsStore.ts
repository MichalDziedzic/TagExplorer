import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { SortBy, SortOrder } from "../types/types"

interface TableSettingsState {
  page: number
  pageSize: number
  sortBy: SortBy
  sortOrder: SortOrder
  setPage: (page: number) => void
  setPageSize: (pageSize: number) => void
  setSortBy: (sortBy: SortBy) => void
  setSortOrder: (sortOrder: SortOrder) => void
}

export const useTableSettingsStore = create<TableSettingsState>()(
  devtools((set) => ({
    page: 1,
    pageSize: 10,
    sortBy: "popular",
    sortOrder: "desc",
    setPage: (page) => set({ page }),
    setPageSize: (pageSize) => set({ pageSize }),
    setSortBy: (sortBy) => set({ sortBy }),
    setSortOrder: (sortOrder) => set({ sortOrder }),
  }))
)
