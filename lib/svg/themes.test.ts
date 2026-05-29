import { describe, expect, it } from 'vitest';
import { themes, AUTO_THEME_LIGHT, AUTO_THEME_DARK } from './themes';

const HEX_REGEX = /^[0-9a-f]{6}$/i;

describe('themes', () => {
  it('should not use # prefix in background colors', () => {
    Object.values(themes).forEach((theme) => {
      expect(theme.bg.startsWith('#')).toBe(false);
    });
  });

  it('should not use # prefix in text colors', () => {
    Object.values(themes).forEach((theme) => {
      expect(theme.text.startsWith('#')).toBe(false);
    });
  });

  it('should not use # prefix in accent colors', () => {
    Object.values(themes).forEach((theme) => {
      expect(theme.accent.startsWith('#')).toBe(false);
    });
  });

  it('AUTO_THEME_LIGHT references themes.light', () => {
    expect(AUTO_THEME_LIGHT).toBe(themes.light);
  });

  it('AUTO_THEME_DARK references themes.dark', () => {
    expect(AUTO_THEME_DARK).toBe(themes.dark);
  });

  it('AUTO_THEME_LIGHT bg matches themes.light.bg', () => {
    expect(AUTO_THEME_LIGHT.bg).toBe(themes.light.bg);
  });

  it('AUTO_THEME_DARK accent matches themes.dark.accent', () => {
    expect(AUTO_THEME_DARK.accent).toBe(themes.dark.accent);
  });

  it('should have valid 6-char hex bg colors', () => {
    Object.entries(themes).forEach(([name, theme]) => {
      expect(theme.bg, `theme "${name}": bg must match /^[0-9a-f]{6}$/i`).toMatch(HEX_REGEX);
    });
  });

  it('should have valid 6-char hex text colors', () => {
    Object.entries(themes).forEach(([name, theme]) => {
      expect(theme.text, `theme "${name}": text must match /^[0-9a-f]{6}$/i`).toMatch(HEX_REGEX);
    });
  });

  it('should have valid 6-char hex accent colors', () => {
    Object.entries(themes).forEach(([name, theme]) => {
      expect(theme.accent, `theme "${name}": accent must match /^[0-9a-f]{6}$/i`).toMatch(
        HEX_REGEX
      );
    });
  });
});
