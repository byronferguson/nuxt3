import type { Meta, StoryObj } from '@storybook/vue3';

import PageContent from '~/components/global/PageContent.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'BigBlue/PageContent',
  component: PageContent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof PageContent>;

export default meta;
type Story = StoryObj<typeof PageContent>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const WithoutHeading: Story = {
  render: args => ({
    components: { PageContent },
    setup() {
      return { args };
    },
    template: `
    <PageContent v-bind="args">
      Without Heading - Main Content
    </PageContent>`,
  }),
};

export const WithHeading: Story = {
  render: args => ({
    components: { PageContent },
    setup() {
      return { args };
    },
    template: `
    <PageContent v-bind="args">
      <template #heading>
        Heading
      </template>
      With Heading - Main Content
    </PageContent>`,
  }),
};
