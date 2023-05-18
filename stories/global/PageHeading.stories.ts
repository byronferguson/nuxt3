import type { Meta, StoryObj } from '@storybook/vue3';

import PageHeading from '~/components/global/PageHeading.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'BigBlue/PageHeading',
  component: PageHeading,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Big Blue',
      type: { name: 'string', required: true },
    },
  },
  args: { default: 'Base' }, // default value
} satisfies Meta<typeof PageHeading>;

export default meta;
type Story = StoryObj<typeof PageHeading>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {};
