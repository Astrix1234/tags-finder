import type { Meta, StoryObj } from '@storybook/react';
import NativeSelectInput from './NativeSelectInput';

const meta: Meta<typeof NativeSelectInput> = {
  title: 'Components/NativeSelectInput',
  component: NativeSelectInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    defaultValue: { control: 'text' },
    options: {
      control: 'array',
      description: 'Array of options for the select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NativeSelectInput>;

export const Default: Story = {
  args: {
    label: 'Select Option',
    defaultValue: 'option1',
    options: ['option1', 'option2', 'option3'],
    handleChange: () => console.log('Option changed'),
  },
};

export const WithCustomOptions: Story = {
  args: {
    label: 'Choose a Fruit',
    defaultValue: 'apple',
    options: ['apple', 'banana', 'cherry'],
    handleChange: () => console.log('Fruit changed'),
  },
};

export const WithLongList: Story = {
  args: {
    label: 'Select Number',
    defaultValue: '1',
    options: Array.from({ length: 20 }, (_, i) => (i + 1).toString()),
    handleChange: () => console.log('Number changed'),
  },
};
