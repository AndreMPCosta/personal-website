import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import ContactSection from 'src/components/sections/Contact/ContactSection.vue';
import axios from 'axios';

installQuasarPlugin();

vi.mock('axios');

describe('ContactSection Component', () => {
  beforeEach(() => {
    vi.mocked(axios.get).mockResolvedValue({
      data: {
        stargazers_count: 10,
        forks: 5,
      },
    });
  });

  it('should render component', () => {
    const wrapper = mount(ContactSection, {
      props: {
        username: 'testuser',
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('should display motivational quote', () => {
    const wrapper = mount(ContactSection, {
      props: {
        username: 'testuser',
      },
    });

    expect(wrapper.text()).toContain('Life is a journey');
    expect(wrapper.text()).toContain("don't forget to make a difference");
  });

  it('should display call to action', () => {
    const wrapper = mount(ContactSection, {
      props: {
        username: 'testuser',
      },
    });

    expect(wrapper.text()).toContain('Interested in working together?');
  });

  it('should have Say Hello button with correct email link', () => {
    const wrapper = mount(ContactSection, {
      props: {
        username: 'testuser',
      },
    });

    const sayHelloBtn = wrapper.find('#say-hello');
    expect(sayHelloBtn.exists()).toBe(true);
    expect(sayHelloBtn.attributes('href')).toBe('mailto:contact@andrecosta.eu');
  });

  it('should have social media links', () => {
    const wrapper = mount(ContactSection, {
      props: {
        username: 'testuser',
      },
    });

    const buttons = wrapper.findAllComponents({ name: 'QBtn' });
    const socialButtons = buttons.filter(
      (btn) =>
        btn.attributes('href')?.includes('github.com') ||
        btn.attributes('href')?.includes('linkedin.com') ||
        btn.attributes('href')?.includes('mailto:'),
    );

    expect(socialButtons.length).toBeGreaterThan(0);
  });

  it('should fetch GitHub repository information', async () => {
    mount(ContactSection, {
      props: {
        username: 'testuser',
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining('api.github.com/repos/testuser/personal-website'),
    );
  });

  it('should display stars and forks count', async () => {
    vi.mocked(axios.get).mockResolvedValue({
      data: {
        stargazers_count: 42,
        forks: 15,
      },
    });

    const wrapper = mount(ContactSection, {
      props: {
        username: 'testuser',
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 100));
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.stars).toBe(42);
    expect(wrapper.vm.forks).toBe(15);
  });

  it('should display "Handcrafted by André Costa"', () => {
    const wrapper = mount(ContactSection, {
      props: {
        username: 'testuser',
      },
    });

    expect(wrapper.text()).toContain('Handcrafted by André Costa');
  });

  it('should display "Powered by" with Vue logo', () => {
    const wrapper = mount(ContactSection, {
      props: {
        username: 'testuser',
      },
    });

    expect(wrapper.text()).toContain('Powered by');
    const vueImg = wrapper.find('img[alt="vue"]');
    expect(vueImg.exists()).toBe(true);
  });

  it('should have link to personal website repository', () => {
    const wrapper = mount(ContactSection, {
      props: {
        username: 'testuser',
      },
    });

    const repoLink = wrapper.find(
      'a[href*="github.com/AndreMPCosta/personal-website"]',
    );
    expect(repoLink.exists()).toBe(true);
  });
});
