import { Meta, StoryObj } from "@storybook/react"
import LoadingIndicator from "../components/LoadingIndicator"

const meta: Meta<typeof LoadingIndicator> = {
  title: "Components/LoadingIndicator",
  component: LoadingIndicator,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LoadingIndicator>

export default meta

export const Default: StoryObj<typeof meta> = {}
