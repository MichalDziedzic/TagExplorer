import { Meta, StoryObj } from "@storybook/react"
import ErrorDisplay from "../components/ErrorDisplay"

const meta: Meta<typeof ErrorDisplay> = {
  title: "Components/ErrorDisplay",
  component: ErrorDisplay,
  parameters: {
    layout: "centered",
  },
  args: {
    message: "This is an error message.",
  },
} satisfies Meta<typeof ErrorDisplay>

export default meta

export const Default: StoryObj<typeof meta> = {}

export const CustomMessage: StoryObj<typeof meta> = {
  args: {
    message: "Custom error message. Something went wrong!",
  },
}

export const LongMessage: StoryObj<typeof meta> = {
  args: {
    message:
      "This is a very long error message to demonstrate how the component handles overflow and text wrapping. Please ensure that the message is displayed correctly in all scenarios.", // Długa wiadomość
  },
}
