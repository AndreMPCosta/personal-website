import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SectionHeader from 'src/components/ui/SectionHeader.vue';

installQuasarPlugin();

describe('SectionHeader Component', () => {
  it('should render with number and text', () => {
    const wrapper = mount(SectionHeader, {
      props: {
        number: '1',
        text: 'About',
      },
    });

    expect(wrapper.text()).toContain('01.');
    expect(wrapper.text()).toContain('About');
  });

  it('should pad single digit numbers', () => {
    const wrapper = mount(SectionHeader, {
      props: {
        number: '3',
        text: 'Projects',
      },
    });

    const numberDiv = wrapper.find('.number');
    expect(numberDiv.text()).toBe('03.');
  });

  it('should not pad double digit numbers', () => {
    const wrapper = mount(SectionHeader, {
      props: {
        number: '12',
        text: 'Contact',
      },
    });

    const numberDiv = wrapper.find('.number');
    expect(numberDiv.text()).toBe('12.');
  });

  it('should render horizontal line', () => {
    const wrapper = mount(SectionHeader, {
      props: {
        number: '1',
        text: 'About',
      },
    });

    const hr = wrapper.find('hr');
    expect(hr.exists()).toBe(true);
  });

  it('should display title text correctly', () => {
    const wrapper = mount(SectionHeader, {
      props: {
        number: '2',
        text: 'Work Experience',
      },
    });

    const titleDiv = wrapper.find('.title');
    expect(titleDiv.text()).toBe('Work Experience');
  });

  it('should apply correct CSS classes', () => {
    const wrapper = mount(SectionHeader, {
      props: {
        number: '1',
        text: 'Test',
      },
    });

    expect(wrapper.find('.section-header').exists()).toBe(true);
    expect(wrapper.find('.number').exists()).toBe(true);
    expect(wrapper.find('.title').exists()).toBe(true);
  });
});
