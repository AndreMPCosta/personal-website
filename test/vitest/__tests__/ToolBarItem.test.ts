import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it, beforeEach, vi } from 'vitest';
import ToolBarItem from 'src/components/ui/ToolBarItem.vue';

installQuasarPlugin();

describe('ToolBarItem Component', () => {
  beforeEach(() => {
    // Mock scrollTo
    window.scrollTo = vi.fn();
  });

  it('should render with label', () => {
    const wrapper = mount(ToolBarItem, {
      props: {
        label: 'about',
        section: 'AboutSection',
        isFaded: false,
      },
    });

    expect(wrapper.text()).toContain('// about');
  });

  it('should display number when provided', () => {
    const wrapper = mount(ToolBarItem, {
      props: {
        number: '1',
        label: 'about',
        section: 'AboutSection',
        isFaded: false,
      },
    });

    const numberDiv = wrapper.find('.number');
    expect(numberDiv.text()).toBe('01');
  });

  it('should hide number when not provided', () => {
    const wrapper = mount(ToolBarItem, {
      props: {
        label: 'about',
        section: 'AboutSection',
        isFaded: false,
      },
    });

    const numberDiv = wrapper.find('.number');
    expect((numberDiv.element as HTMLElement).style.opacity).toBe('0');
  });

  it('should apply fade effect when isFaded is true', () => {
    const wrapper = mount(ToolBarItem, {
      props: {
        label: 'about',
        section: 'AboutSection',
        isFaded: true,
      },
    });

    const container = wrapper.find('.control-fade');
    expect(container.exists()).toBe(true);
  });

  it('should have correct opacity when not faded', () => {
    const wrapper = mount(ToolBarItem, {
      props: {
        label: 'about',
        section: 'AboutSection',
        isFaded: false,
      },
    });

    const container = wrapper.find('.control-fade');
    expect(container.exists()).toBe(true);
  });

  it('should call scroll function when clicked', async () => {
    // Create a mock element for getElementById to return
    const mockElement = document.createElement('div');
    mockElement.id = 'AboutSection';
    Object.defineProperty(mockElement, 'offsetTop', {
      value: 100,
      configurable: true,
    });
    document.body.appendChild(mockElement);

    const wrapper = mount(ToolBarItem, {
      props: {
        label: 'about',
        section: 'AboutSection',
        isFaded: false,
      },
    });

    await wrapper.trigger('click');
    expect(window.scrollTo).toHaveBeenCalled();

    // Cleanup
    document.body.removeChild(mockElement);
  });

  it('should handle special sections (HomeSection)', async () => {
    const wrapper = mount(ToolBarItem, {
      props: {
        label: 'home',
        section: 'HomeSection',
        isFaded: false,
      },
    });

    await wrapper.trigger('click');
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({
        top: 0,
        behavior: 'smooth',
      })
    );
  });
});