import type { Meta, StoryObj } from "@storybook/react";
import FormControl from "@/components/molecules/FormControl";

const meta: Meta<typeof FormControl> = {
  title: "Molecules/FormControl",
  component: FormControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Name",
    inputProps: {
      placeholder: "Enter your name",
    },
    helperText: "This will be your account name.",
  },
};
