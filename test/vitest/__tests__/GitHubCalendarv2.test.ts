import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import GitHubCalendarv2 from 'src/components/ui/GitHubCalendarv2.vue';
import axios from 'axios';

installQuasarPlugin();

vi.mock('axios');

// Real API response structure from GitHub contributions API
const mockApiResponse = {
  total: { lastYear: 1017 },
  contributions: [
    { date: '2024-10-06', count: 1, level: 1 },
    { date: '2024-10-07', count: 5, level: 1 },
    { date: '2024-10-08', count: 0, level: 0 },
    { date: '2024-10-21', count: 9, level: 2 },
    { date: '2025-02-21', count: 11, level: 3 },
    { date: '2025-03-26', count: 17, level: 4 },
    { date: '2025-10-10', count: 6, level: 2 },
  ],
};

describe('GitHubCalendarv2 Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();

    // Mock the DOM element that the component tries to manipulate
    const mockLegend = {
      children: [
        { remove: vi.fn() },
        { remove: vi.fn() },
      ],
    };
    vi.spyOn(document, 'getElementsByClassName').mockReturnValue([mockLegend] as any);

    // Setup default mock response
    vi.mocked(axios.get).mockResolvedValue({ data: mockApiResponse });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('should render component', () => {
    const wrapper = mount(GitHubCalendarv2, {
      props: {
        username: 'testuser',
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('should display contributions count from real API structure', async () => {
    const wrapper = mount(GitHubCalendarv2, {
      props: {
        username: 'testuser',
      },
    });

    await vi.runAllTimersAsync();
    await wrapper.vm.$nextTick();

    // Component formats numbers with toLocaleString(), which uses system locale
    // Check for both "1,017" and "1017" to handle different locales
    const text = wrapper.text();
    expect(text).toMatch(/1[,.]?017 contributions in the last year/);
  });

  it('should call GitHub API with correct username and endpoint', async () => {
    mount(GitHubCalendarv2, {
      props: {
        username: 'andrempcosta',
      },
    });

    await vi.runAllTimersAsync();

    expect(axios.get).toHaveBeenCalledWith(
      'https://github-contributions-api.jogruber.de/v4/andrempcosta?y=last'
    );
  });

  it('should render calendar heatmap component', () => {
    const wrapper = mount(GitHubCalendarv2, {
      props: {
        username: 'testuser',
      },
    });

    const calendarHeatmap = wrapper.findComponent({ name: 'CalendarHeatmap' });
    expect(calendarHeatmap.exists()).toBe(true);
  });

  it('should pass contributions array to calendar heatmap', async () => {
    const wrapper = mount(GitHubCalendarv2, {
      props: {
        username: 'testuser',
      },
    });

    await vi.runAllTimersAsync();
    await wrapper.vm.$nextTick();

    const calendarHeatmap = wrapper.findComponent({ name: 'CalendarHeatmap' });
    expect(calendarHeatmap.props('values')).toBeDefined();
    expect(Array.isArray(calendarHeatmap.props('values'))).toBe(true);
    expect(calendarHeatmap.props('values').length).toBeGreaterThan(0);
  });

  it('should handle different contribution levels correctly', async () => {
    const wrapper = mount(GitHubCalendarv2, {
      props: {
        username: 'testuser',
      },
    });

    await vi.runAllTimersAsync();
    await wrapper.vm.$nextTick();

    // Verify the component received data with various levels (0-4)
    expect((wrapper.vm as any).contributions.contributions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ level: 0 }),
        expect.objectContaining({ level: 1 }),
        expect.objectContaining({ level: 2 }),
      ])
    );
  });
});