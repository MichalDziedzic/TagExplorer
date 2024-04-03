import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TagsExplorer } from "./views/TagsExplorer"

import "./App.css"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TagsExplorer />
    </QueryClientProvider>
  )
}

export default App
