import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Button from './Button.vue';

describe('Button', () => {
  it('to be Vue instance', () => {
    const wrapper = mount({
      components: { Button },
      template: '<Button>Test</Button>',
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it('to include label', () => {
    const wrapper = mount({
      components: { Button },
      template: '<Button>Test</Button>',
    });

    expect(wrapper.html()).toContain('Test');
  });
});
