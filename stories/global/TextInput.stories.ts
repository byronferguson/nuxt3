import type { Meta, StoryObj } from '@storybook/vue3';

import TextInput from '~/components/global/TextInput.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'BigBlue/Input/TextInput',
  component: TextInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      type: { name: 'string', required: true },
    },
    name: {
      control: 'text',
      type: { name: 'string', required: true },
    },
    placeholder: {
      control: 'text',
      type: { name: 'string', required: false },
    },
    label: {
      control: 'text',
      type: { name: 'string', required: false },
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      },
      defaultValue: 'text',
    },
    schema: {
      control: 'object',
    },
  },
  // args: { default: 'Base' }
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {};
