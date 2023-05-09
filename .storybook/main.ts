// https://laurentcazanove.com/articles/storybook-nuxt-guide/
import type { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';

import { loadConfigFromFile, mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(baseConfig) {
    const user = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts') as any);

    return mergeConfig(baseConfig, user?.config ?? {});
  },
};
export default config;
