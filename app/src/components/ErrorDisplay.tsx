import React from "react"

interface ErrorDisplayProps {
  message: string
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return <div className="text-red-500 text-center py-4">Error: {message}</div>
}

export default ErrorDisplay
