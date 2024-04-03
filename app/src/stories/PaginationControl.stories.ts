import { Meta, StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import PaginationControl from "../components/PaginationControl"

const meta: Meta<typeof PaginationControl> = {
  title: "Components/PaginationControl",
  component: PaginationControl,
  parameters: {
    layout: "centered",
  },
  args: {
    page: 1,
    setPage: action("setPage"),
    hasMore: true,
  },
  argTypes: {
    page: {
      control: "number",
      min: 1,
    },
    hasMore: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof PaginationControl>

export default meta

export const Default: StoryObj<typeof meta> = {}

export const LastPage: StoryObj<typeof meta> = {
  args: {
    page: 10,
    hasMore: false,
  },
}

export const FirstPage: StoryObj<typeof meta> = {
  args: {
    page: 1,
    hasMore: true,
  },
}
