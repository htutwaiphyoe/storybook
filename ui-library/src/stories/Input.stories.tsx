import type { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "John Doe",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "********",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "10000",
  },
};

export const Radio: Story = {
  args: {
    type: "radio",
  },
};

export const Date: Story = {
  args: {
    type: "date",
  },
};
