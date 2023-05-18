import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '~/components/global/Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'BigBlue/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Big Blue',
      type: { name: 'string', required: true },
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      },
    },
  },
  args: { default: 'Base' }, // default value
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {};

export const Primary: Story = {
  args: {
    default: 'Primary',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: { default: 'Secondary', color: 'secondary' },
};

export const Success: Story = {
  args: { default: 'Success', color: 'success' },
};

export const Danger: Story = {
  args: { default: 'Danger', color: 'danger' },
};

export const Warning: Story = {
  args: { default: 'Warning', color: 'warning' },
};

export const Info: Story = {
  args: { default: 'Info', color: 'info' },
};

export const Light: Story = {
  args: { default: 'Light', color: 'light' },
};

export const Dark: Story = {
  args: { default: 'Dark', color: 'dark' },
};
