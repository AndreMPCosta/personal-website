import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import AboutSection from 'src/components/sections/About/AboutSection.vue';
import axios from 'axios';

installQuasarPlugin();

vi.mock('axios');

describe('AboutSection Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();

    // Mock DOM element for GitHubCalendarv2 component
    const mockLegend = {
      children: [
        { remove: vi.fn() },
        { remove: vi.fn() },
      ],
    };
    vi.spyOn(document, 'getElementsByClassName').mockReturnValue([mockLegend] as any);

    // Setup default mock response
    vi.mocked(axios.get).mockResolvedValue({
      data: {
        total: { lastYear: 0 },
        contributions: [],
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('should render component', () => {
    const wrapper = mount(AboutSection);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render section header with correct number and text', () => {
    const wrapper = mount(AboutSection);
    const sectionHeader = wrapper.findComponent({ name: 'SectionHeader' });

    expect(sectionHeader.exists()).toBe(true);
    expect(sectionHeader.props('number')).toBe('1');
    expect(sectionHeader.props('text')).toBe('About');
  });

  it('should render AboutMain component', () => {
    const wrapper = mount(AboutSection);
    const aboutMain = wrapper.findComponent({ name: 'AboutMain' });

    expect(aboutMain.exists()).toBe(true);
  });

  it('should render GitHubCalendarv2 component with username', () => {
    const wrapper = mount(AboutSection);
    const githubCalendar = wrapper.findComponent({ name: 'GitHubCalendarv2' });

    expect(githubCalendar.exists()).toBe(true);
    expect(githubCalendar.props('username')).toBe('andrempcosta');
  });

  it('should have section element', () => {
    const wrapper = mount(AboutSection);
    expect(wrapper.find('section').exists()).toBe(true);
  });
});