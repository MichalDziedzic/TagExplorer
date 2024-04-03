import { Meta, StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import TableControls from "../components/tables/TableControls"

const meta: Meta<typeof TableControls> = {
  title: "Components/TableControls",
  component: TableControls,
  parameters: {
    layout: "centered",
  },
  args: {
    pageSize: 10,
    sortBy: "name",
    sortOrder: "asc",
    setPageSize: action("setPageSize"),
    setSortBy: action("setSortBy"),
    setSortOrder: action("setSortOrder"),
  },
  tags: ["autodocs"],
  argTypes: {
    pageSize: {
      control: "number",
      min: 5,
      max: 100,
      step: 5,
    },
    sortBy: {
      control: "radio",
      options: ["name", "popular", "activity"],
    },
    sortOrder: {
      control: "radio",
      options: ["asc", "desc"],
    },
  },
} satisfies Meta<typeof TableControls>

export default meta

export const Default: StoryObj<typeof meta> = {}
