import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import HeroSection from 'src/components/sections/Hero/HeroSection.vue';

installQuasarPlugin();

describe('HeroSection Component', () => {
  const mockShowSection = vi.fn();

  it('should render component', () => {
    const wrapper = mount(HeroSection, {
      props: {
        showSection: mockShowSection,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('should render HeroMain component', () => {
    const wrapper = mount(HeroSection, {
      props: {
        showSection: mockShowSection,
      },
    });

    const heroMain = wrapper.findComponent({ name: 'HeroMain' });
    expect(heroMain.exists()).toBe(true);
  });

  it('should call showSection on mount', async () => {
    mount(HeroSection, {
      props: {
        showSection: mockShowSection,
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(mockShowSection).toHaveBeenCalled();
    expect(mockShowSection).toHaveBeenCalledWith(
      expect.anything(),
      'HeroSection',
      true
    );
  });

  it('should have section element', () => {
    const wrapper = mount(HeroSection, {
      props: {
        showSection: mockShowSection,
      },
    });

    expect(wrapper.find('section').exists()).toBe(true);
  });

  it('should set initial opacity to 0 on mount', async () => {
    const wrapper = mount(HeroSection, {
      props: {
        showSection: mockShowSection,
      },
    });

    await wrapper.vm.$nextTick();

    const section = wrapper.find('section');
    expect(section.element.style.opacity).toBe('0');
  });
});