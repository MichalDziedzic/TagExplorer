import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TagsTable } from "./components/TagsTable"
import "./App.css"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TagsTable />
    </QueryClientProvider>
  )
}

export default App
