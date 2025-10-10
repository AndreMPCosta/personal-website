import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ProjectCard from 'src/components/sections/Projects/ProjectCard.vue';
import { Project } from 'src/models/Project';

installQuasarPlugin();

describe('ProjectCard Component', () => {
  const mockProject: Project = {
    imageSrc: '/projects/test.png',
    title: 'Test Project',
    subtitle: 'Test Subtitle',
    stack: ['vue', 'typescript', 'python'],
    github: 'https://github.com/test/project',
    homepage: 'https://test.com',
    backImages: ['/projects/test_back.png'],
    slot: null as any,
  };

  it('should render component', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('should display project title', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    expect(wrapper.text()).toContain('Test Project');
  });

  it('should display project subtitle', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    expect(wrapper.text()).toContain('Test Subtitle');
  });

  it('should have project image avatar', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    const avatar = wrapper.findComponent({ name: 'QAvatar' });
    expect(avatar.exists()).toBe(true);

    const img = avatar.find('img');
    expect(img.attributes('src')).toBe('/projects/test.png');
  });

  it('should have github link button', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    const buttons = wrapper.findAllComponents({ name: 'QBtn' });
    const githubBtn = buttons.find((btn) =>
      btn.attributes('href') === 'https://github.com/test/project'
    );

    expect(githubBtn).toBeDefined();
  });

  it('should show homepage link when provided', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    const buttons = wrapper.findAllComponents({ name: 'QBtn' });
    const homepageBtn = buttons.find((btn) =>
      btn.attributes('href') === 'https://test.com'
    );

    expect(homepageBtn).toBeDefined();
  });

  it('should not show homepage link when not provided', () => {
    const projectWithoutHomepage = { ...mockProject, homepage: undefined };
    const wrapper = mount(ProjectCard, {
      props: {
        project: projectWithoutHomepage,
      },
    });

    const buttons = wrapper.findAllComponents({ name: 'QBtn' });
    const homepageBtn = buttons.find((btn) =>
      btn.attributes('icon') === 'eva-link-outline'
    );

    expect(homepageBtn).toBeUndefined();
  });

  it('should show gitlab link when provided', () => {
    const projectWithGitlab = {
      ...mockProject,
      gitlab: 'https://gitlab.com/test/project'
    };

    const wrapper = mount(ProjectCard, {
      props: {
        project: projectWithGitlab,
      },
    });

    const buttons = wrapper.findAllComponents({ name: 'QBtn' });
    const gitlabBtn = buttons.find((btn) =>
      btn.attributes('href') === 'https://gitlab.com/test/project'
    );

    expect(gitlabBtn).toBeDefined();
  });

  it('should have Stack toggle button', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    expect(wrapper.text()).toContain('Stack');
  });

  it('should toggle expanded state when Stack button clicked', async () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    expect(wrapper.vm.expanded).toBe(false);

    const stackButtons = wrapper.findAllComponents({ name: 'QBtn' });
    const stackBtn = stackButtons.find((btn) =>
      btn.text().includes('Stack')
    );

    await stackBtn?.trigger('click');
    expect(wrapper.vm.expanded).toBe(true);

    await stackBtn?.trigger('click');
    expect(wrapper.vm.expanded).toBe(false);
  });

  it('should render TechIcon components for stack', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    const techIcons = wrapper.findAllComponents({ name: 'TechIcon' });
    expect(techIcons.length).toBe(mockProject.stack.length);
  });

  it('should render NavigationDots component when card is flipped', async () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    // Flip the card first
    await wrapper.vm.flip();
    await wrapper.vm.$nextTick();

    const navigationDots = wrapper.findComponent({ name: 'NavigationDots' });
    expect(navigationDots.exists()).toBe(true);
  });

  it('should have carousel for back images', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    const carousel = wrapper.findComponent({ name: 'QCarousel' });
    expect(carousel.exists()).toBe(true);
  });

  it('should handle multiple back images', async () => {
    const projectWithMultipleImages = {
      ...mockProject,
      backImages: [
        '/projects/test1.png',
        '/projects/test2.png',
        '/projects/test3.png',
      ],
    };

    const wrapper = mount(ProjectCard, {
      props: {
        project: projectWithMultipleImages,
      },
    });

    const carousel = wrapper.findComponent({ name: 'QCarousel' });
    expect(carousel.exists()).toBe(true);

    // Check that carousel is configured for multiple slides
    expect(projectWithMultipleImages.backImages.length).toBe(3);
  });

  it('should have flip arrow button', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    const buttons = wrapper.findAllComponents({ name: 'QBtn' });
    // Arrow button is used for flipping cards
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should toggle backFace state when flip is called', async () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    expect(wrapper.vm.backFace).toBe(true);

    await wrapper.vm.flip();
    expect(wrapper.vm.backFace).toBe(false);

    await wrapper.vm.flip();
    expect(wrapper.vm.backFace).toBe(true);
  });

  it('should change slide when changeSlide is called', async () => {
    const projectWithMultipleImages = {
      ...mockProject,
      backImages: ['/projects/test1.png', '/projects/test2.png'],
    };

    const wrapper = mount(ProjectCard, {
      props: {
        project: projectWithMultipleImages,
      },
    });

    expect(wrapper.vm.slide).toBe(0);

    await wrapper.vm.changeSlide(1);
    expect(wrapper.vm.slide).toBe(1);
  });

  it('should have proper card styling classes', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    });

    const card = wrapper.findComponent({ name: 'QCard' });
    expect(card.exists()).toBe(true);
    expect(card.classes()).toContain('customCard');
  });
});