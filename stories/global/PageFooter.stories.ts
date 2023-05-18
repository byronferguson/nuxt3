import type { Meta, StoryObj } from '@storybook/vue3';

import PageFooter from '~/components/global/PageFooter.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'BigBlue/PageFooter',
  component: PageFooter,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof PageFooter>;

export default meta;
type Story = StoryObj<typeof PageFooter>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {};
