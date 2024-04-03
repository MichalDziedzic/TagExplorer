import { Meta, StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import ActionButton from "../components/buttons/ActionButton"

const meta: Meta<typeof ActionButton> = {
  title: "Components/ActionButton",
  component: ActionButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Click Me",
    onClick: action("onClick"),
    disabled: false,
  },
} satisfies Meta<typeof ActionButton>

export default meta

export const Default: StoryObj<typeof meta> = {}

export const Disabled: StoryObj<typeof meta> = {
  args: {
    disabled: true,
  },
}
