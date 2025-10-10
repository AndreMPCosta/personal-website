import { describe, expect, it } from 'vitest';
import projects from 'src/content/projects';

describe('projects content', () => {
  it('should export an array', () => {
    expect(Array.isArray(projects)).toBe(true);
  });

  it('should have projects', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('should have valid project structure', () => {
    projects.forEach((project) => {
      expect(project).toHaveProperty('imageSrc');
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('subtitle');
      expect(project).toHaveProperty('stack');
      expect(project).toHaveProperty('github');
      expect(project).toHaveProperty('backImages');
    });
  });

  it('should have Mangalibe project', () => {
    const mangalibe = projects.find((p) => p.title === 'Mangalibe');
    expect(mangalibe).toBeDefined();
    expect(mangalibe?.subtitle).toContain('Online Shop');
    expect(mangalibe?.stack).toContain('vue');
  });

  it('should have Padel Checker project', () => {
    const padelChecker = projects.find((p) => p.title === 'Padel Checker');
    expect(padelChecker).toBeDefined();
    expect(padelChecker?.subtitle).toContain('Padel');
    expect(padelChecker?.stack).toContain('FastApi');
  });

  it('should have Gym App project', () => {
    const gymApp = projects.find((p) => p.title === 'Gym App');
    expect(gymApp).toBeDefined();
    expect(gymApp?.subtitle).toContain('Gymnasium');
    expect(gymApp?.stack).toContain('Flask');
  });

  it('should have valid stack arrays', () => {
    projects.forEach((project) => {
      expect(Array.isArray(project.stack)).toBe(true);
      expect(project.stack.length).toBeGreaterThan(0);
    });
  });

  it('should have valid image paths', () => {
    projects.forEach((project) => {
      expect(project.imageSrc).toMatch(/^\/projects\//);
      expect(Array.isArray(project.backImages)).toBe(true);
      expect(project.backImages.length).toBeGreaterThan(0);
    });
  });

  it('should have valid github URLs', () => {
    projects.forEach((project) => {
      expect(project.github).toMatch(/^https:\/\/github\.com\//);
    });
  });

  it('should have slots for all projects', () => {
    projects.forEach((project) => {
      expect(project.slot).toBeDefined();
    });
  });
});
