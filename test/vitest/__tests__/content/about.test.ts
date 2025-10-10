import { describe, expect, it } from 'vitest';
import aboutDescription from 'src/content/about';

describe('about content', () => {
  it('should export a string', () => {
    expect(typeof aboutDescription).toBe('string');
  });

  it('should not be empty', () => {
    expect(aboutDescription.length).toBeGreaterThan(0);
  });

  it('should contain expected content', () => {
    expect(aboutDescription).toContain('software engineer');
    expect(aboutDescription).toContain('biomedical engineering');
  });

  it('should contain HTML line breaks', () => {
    expect(aboutDescription).toContain('<br>');
  });

  it('should mention technology and healthcare', () => {
    expect(aboutDescription.toLowerCase()).toContain('technology');
    expect(aboutDescription.toLowerCase()).toContain('healthcare');
  });

  it('should describe passion for learning', () => {
    expect(aboutDescription.toLowerCase()).toContain('learner');
  });
});
