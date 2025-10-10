import { describe, expect, it } from 'vitest';
import workPlaces from 'src/content/workplaces';

describe('workplaces content', () => {
  it('should export an array', () => {
    expect(Array.isArray(workPlaces)).toBe(true);
  });

  it('should have work experiences', () => {
    expect(workPlaces.length).toBeGreaterThan(0);
  });

  it('should have valid GroupElement structure', () => {
    workPlaces.forEach((workplace) => {
      expect(workplace).toHaveProperty('label');
      expect(workplace).toHaveProperty('content');
      expect(workplace.content).toHaveProperty('title');
      expect(workplace.content).toHaveProperty('companyURL');
      expect(workplace.content).toHaveProperty('date');
      expect(workplace.content).toHaveProperty('info');
      expect(workplace.content).toHaveProperty('technologies');
    });
  });

  it('should have Atlas as first entry', () => {
    expect(workPlaces[0].label).toBe('Atlas');
    expect(workPlaces[0].content.title).toContain('Senior Backend Engineer');
  });

  it('should have TekPrivacy entry', () => {
    const tekPrivacy = workPlaces.find((w) => w.label === 'TekPrivacy');
    expect(tekPrivacy).toBeDefined();
    expect(tekPrivacy?.content.title).toBe('Engineer');
  });

  it('should have Valmedis entry', () => {
    const valmedis = workPlaces.find((w) => w.label === 'Valmedis');
    expect(valmedis).toBeDefined();
    expect(valmedis?.content.title).toBe('Web Developer');
  });

  it('should have Celfocus entry', () => {
    const celfocus = workPlaces.find((w) => w.label === 'Celfocus');
    expect(celfocus).toBeDefined();
    expect(celfocus?.content.title).toBe('Managed Services');
  });

  it('should have Accenture entry', () => {
    const accenture = workPlaces.find((w) => w.label === 'Accenture');
    expect(accenture).toBeDefined();
    expect(accenture?.content.title).toBe('Application Development Associate');
  });

  it('should have valid company URLs', () => {
    workPlaces.forEach((workplace) => {
      expect(workplace.content.companyURL).toBeInstanceOf(URL);
      expect(workplace.content.companyURL.protocol).toMatch(/^https?:/);
    });
  });

  it('should have date ranges', () => {
    workPlaces.forEach((workplace) => {
      expect(workplace.content.date).toBeTruthy();
      expect(typeof workplace.content.date).toBe('string');
    });
  });

  it('should have info arrays', () => {
    workPlaces.forEach((workplace) => {
      expect(Array.isArray(workplace.content.info)).toBe(true);
      expect(workplace.content.info.length).toBeGreaterThan(0);
    });
  });

  it('should have technologies arrays', () => {
    workPlaces.forEach((workplace) => {
      expect(Array.isArray(workplace.content.technologies)).toBe(true);
      expect(workplace.content.technologies.length).toBeGreaterThan(0);
    });
  });

  it('should be in reverse chronological order', () => {
    // Atlas is most recent, should be first
    expect(workPlaces[0].label).toBe('Atlas');
    // Accenture is oldest, should be last
    expect(workPlaces[workPlaces.length - 1].label).toBe('Accenture');
  });

  it('should include Python in most workplaces', () => {
    const pythonWorkplaces = workPlaces.filter((w) =>
      w.content.technologies.includes('Python')
    );
    expect(pythonWorkplaces.length).toBeGreaterThan(3);
  });
});