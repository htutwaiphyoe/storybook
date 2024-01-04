import type { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/Input";
import Stack from "@/components/Stack";
import Box from "@/components/Box";

const meta: Meta<typeof Input> = {
  title: "Layout/Stack",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: (args) => {
    return (
      <Stack className="gap-4 p-4 bg-gray-300" {...args}>
        <Box className="w-20 h-20 bg-red-500" />
        <Box className="w-20 h-20 bg-green-500" />
        <Box className="w-20 h-20 bg-blue-500" />
      </Stack>
    );
  },
};

export const Horizontal: Story = {
  render: (args) => {
    return (
      <Stack className="flex-row gap-4 p-4 bg-gray-300" {...args}>
        <Box className="w-20 h-20 bg-red-500" />
        <Box className="w-20 h-20 bg-green-500" />
        <Box className="w-20 h-20 bg-blue-500" />
      </Stack>
    );
  },
};
