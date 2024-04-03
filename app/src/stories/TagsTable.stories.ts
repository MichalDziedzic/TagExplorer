import { Meta, StoryObj } from "@storybook/react"
import { TagsTable } from "../components/tables/TagsTable"
import { Tag } from "../types/interfaces"

// example tags data to display only
const sampleTags: Tag[] = [
  {
    name: "React",
    count: 100,
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
  },
  {
    name: "JavaScript",
    count: 200,
    has_synonyms: false,
    is_moderator_only: false,
    is_required: true,
  },
  {
    name: "TypeScript",
    count: 150,
    has_synonyms: true,
    is_moderator_only: true,
    is_required: false,
  },
]

const meta: Meta<typeof TagsTable> = {
  title: "Components/TagsTable",
  component: TagsTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    items: sampleTags,
    headers: ["Nazwa Tagu", "Liczba Postów"],
  },
} satisfies Meta<typeof TagsTable>

export default meta

export const Default: StoryObj<typeof meta> = {}

export const CustomHeaders: StoryObj<typeof meta> = {
  args: {
    headers: ["Tag Name", "Posts Count"],
  },
}
