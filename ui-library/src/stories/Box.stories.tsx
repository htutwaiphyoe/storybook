import type { Meta, StoryObj } from "@storybook/react";
import Box from "@/components/atoms/Box";

const meta: Meta<typeof Box> = {
  title: "Atoms/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "w-20 h-20 bg-red-500",
  },
};
