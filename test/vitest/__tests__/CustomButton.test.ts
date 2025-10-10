import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import CustomButton from 'src/components/ui/CustomButton.vue';

installQuasarPlugin();

describe('CustomButton Component', () => {
  it('should render with label', () => {
    const wrapper = mount(CustomButton, {
      props: {
        label: 'Test Button',
      },
    });

    expect(wrapper.find('.q-btn').exists()).toBe(true);
    expect(wrapper.text()).toContain('Test Button');
  });

  it('should apply active class when active prop is true', () => {
    const wrapper = mount(CustomButton, {
      props: {
        label: 'Test Button',
        active: true,
      },
    });

    expect(wrapper.find('.btnActive').exists()).toBe(true);
    expect(wrapper.find('.active').exists()).toBe(true);
  });

  it('should not apply active class when active prop is false', () => {
    const wrapper = mount(CustomButton, {
      props: {
        label: 'Test Button',
        active: false,
      },
    });

    expect(wrapper.find('.btnActive').exists()).toBe(false);
  });
});