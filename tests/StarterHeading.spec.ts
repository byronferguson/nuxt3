import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import StarterHeading from '../components/StarterHeading.vue';

describe('StarterHeading', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(StarterHeading);
    expect(wrapper.vm).toBeTruthy();
  });
});
