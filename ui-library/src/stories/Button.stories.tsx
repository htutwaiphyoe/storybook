import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: "CLICK ME",
    variant: "solid",
  },
};

export const Outline: Story = {
  args: {
    children: "CLICK ME",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "CLICK ME",
    variant: "ghost",
  },
};
