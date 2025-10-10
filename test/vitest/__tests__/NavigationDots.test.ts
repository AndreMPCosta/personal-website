import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import NavigationDots from 'src/components/ui/NavigationDots.vue';

installQuasarPlugin();

describe('NavigationDots Component', () => {
  it('should render correct number of dots', () => {
    const wrapper = mount(NavigationDots, {
      props: {
        slides: [0, 1, 2],
        activeSlide: 0,
      },
    });

    const buttons = wrapper.findAll('.q-btn');
    expect(buttons.length).toBe(3);
  });

  it('should highlight active slide', () => {
    const wrapper = mount(NavigationDots, {
      props: {
        slides: [0, 1, 2],
        activeSlide: 1,
      },
    });

    const buttons = wrapper.findAllComponents({ name: 'QBtn' });
    expect(buttons[1].props('color')).toBe('primary');
    expect(buttons[0].props('color')).toBe('white');
    expect(buttons[2].props('color')).toBe('white');
  });

  it('should emit changedActiveSlide event when dot is clicked', async () => {
    const wrapper = mount(NavigationDots, {
      props: {
        slides: [0, 1, 2],
        activeSlide: 0,
      },
    });

    const buttons = wrapper.findAllComponents({ name: 'QBtn' });
    await buttons[2].trigger('click');

    expect(wrapper.emitted('changedActiveSlide')).toBeTruthy();
    expect(wrapper.emitted('changedActiveSlide')?.[0]).toEqual([2]);
  });

  it('should handle empty slides array', () => {
    const wrapper = mount(NavigationDots, {
      props: {
        slides: [],
        activeSlide: 0,
      },
    });

    const buttons = wrapper.findAll('.q-btn');
    expect(buttons.length).toBe(0);
  });

  it('should render correctly with single slide', () => {
    const wrapper = mount(NavigationDots, {
      props: {
        slides: [0],
        activeSlide: 0,
      },
    });

    const buttons = wrapper.findAllComponents({ name: 'QBtn' });
    expect(buttons.length).toBe(1);
    expect(buttons[0].props('color')).toBe('primary');
  });
});