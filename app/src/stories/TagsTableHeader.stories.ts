import { Meta, StoryObj } from "@storybook/react"
import TagsTableHeader from "../components/tables/TagsTableHeader"

const meta: Meta<typeof TagsTableHeader> = {
  title: "Components/TagsTable/TagsTableHeader",
  component: TagsTableHeader,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    headers: ["Nazwa Tagu", "Liczba Postów"],
  },
} satisfies Meta<typeof TagsTableHeader>

export default meta

export const Default: StoryObj<typeof meta> = {}

export const CustomHeaders: StoryObj<typeof meta> = {
  args: {
    headers: ["Tag", "Ilość", "Inna Informacja"],
  },
}

export const SingleHeader: StoryObj<typeof meta> = {
  args: {
    headers: ["Jedyny Nagłówek"],
  },
}
