import { Meta, StoryObj } from "@storybook/react"
import TagsTableBody from "../components/tables/TagsTableBody"
import { Tag } from "../types/interfaces"

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

const meta: Meta<typeof TagsTableBody> = {
  title: "Components/TagsTable/TagsTableBody",
  component: TagsTableBody,
  parameters: {
    layout: "centered",
  },
  args: {
    items: sampleTags,
  },
} satisfies Meta<typeof TagsTableBody>

export default meta

export const Default: StoryObj<typeof meta> = {}

export const Empty: StoryObj<typeof meta> = {
  args: {
    items: [],
  },
}
