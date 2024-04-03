import { Meta, StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import SortingControl from "../components/SortingControl"

const meta: Meta<typeof SortingControl> = {
  title: "Components/SortingControl",
  component: SortingControl,
  parameters: {
    layout: "centered",
  },
  args: {
    sortBy: "name",
    sortOrder: "asc",
    onSortByChange: action("Sort by changed"),
    onSortOrderChange: action("Sort order changed"),
  },
  tags: ["autodocs"],
  argTypes: {
    sortBy: {
      control: "radio",
      options: ["name", "popular", "activity"],
    },
    sortOrder: {
      control: "radio",
      options: ["asc", "desc"],
    },
  },
} satisfies Meta<typeof SortingControl>

export default meta

export const Default: StoryObj<typeof meta> = {}
