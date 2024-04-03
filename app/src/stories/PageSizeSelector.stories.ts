import { Meta, StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import PageSizeSelector from "../components/selects/PageSizeSelector"

const meta: Meta<typeof PageSizeSelector> = {
  title: "Components/PageSizeSelector",
  component: PageSizeSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    pageSize: 10,
    setPageSize: action("setPageSize"),
  },
} satisfies Meta<typeof PageSizeSelector>

export default meta

export const Default: StoryObj<typeof meta> = {}

export const WithCustomPageSize: StoryObj<typeof meta> = {
  args: {
    pageSize: 20,
  },
}
