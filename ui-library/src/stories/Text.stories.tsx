import type { Meta, StoryObj } from "@storybook/react";
import Text from "@/components/atoms/Text";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
    children: "Hello, Storybook",
  },
};
