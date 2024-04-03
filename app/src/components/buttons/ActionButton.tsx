import React from "react"

interface ActionButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out disabled:opacity-50"
    >
      {label}
    </button>
  )
}

export default ActionButton
