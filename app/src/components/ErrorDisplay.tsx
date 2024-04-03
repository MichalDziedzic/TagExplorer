import React from "react"

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
  <div className="text-red-500 text-center py-4">Error: {message}</div>
)

export default ErrorDisplay
