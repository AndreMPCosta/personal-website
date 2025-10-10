import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ButtonGroup from 'src/components/ui/ButtonGroup.vue';
import { GroupElement } from 'src/models/GroupElement';

installQuasarPlugin();

describe('ButtonGroup Component', () => {
  const mockGroupElements: GroupElement[] = [
    {
      label: 'First',
      content: {
        title: 'First Title',
        companyURL: new URL('https://example.com'),
        date: 'Jan 2020 - Present',
        info: ['Info 1'],
        technologies: ['vue'],
      },
    },
    {
      label: 'Second',
      content: {
        title: 'Second Title',
        companyURL: new URL('https://example2.com'),
        date: 'Jan 2019 - Dec 2019',
        info: ['Info 2'],
        technologies: ['react'],
      },
    },
  ];

  it('should render with group elements', () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        groupElements: mockGroupElements,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('should render correct number of buttons', () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        groupElements: mockGroupElements,
      },
    });

    const buttons = wrapper.findAllComponents({ name: 'CustomButton' });
    expect(buttons.length).toBe(2);
  });

  it('should have first element active by default', () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        groupElements: mockGroupElements,
      },
    });

    const buttons = wrapper.findAllComponents({ name: 'CustomButton' });
    expect(buttons[0].props('active')).toBe(true);
    expect(buttons[1].props('active')).toBe(false);
  });

  it('should emit setActive event when button is clicked', async () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        groupElements: mockGroupElements,
      },
    });

    //Direct click on CustomButton triggers the onclick
    const buttons = wrapper.findAll('.q-btn');
    await buttons[1].trigger('click');

    expect(wrapper.emitted('setActive')).toBeTruthy();
    expect(wrapper.emitted('setActive')?.[0]).toEqual([1]);
  });

  it('should update active element on click', async () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        groupElements: mockGroupElements,
      },
    });

    const buttons = wrapper.findAll('.q-btn');
    await buttons[1].trigger('click');

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.activeElement).toBe(1);
  });

  it('should handle empty group elements', () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        groupElements: [],
      },
    });

    const buttons = wrapper.findAllComponents({ name: 'CustomButton' });
    expect(buttons.length).toBe(0);
  });

  it('should pass correct props to CustomButton', () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        groupElements: mockGroupElements,
      },
    });

    const firstButton = wrapper.findAllComponents({ name: 'CustomButton' })[0];
    expect(firstButton.props('label')).toBe('First');
    expect(firstButton.props('active')).toBe(true);
  });
});