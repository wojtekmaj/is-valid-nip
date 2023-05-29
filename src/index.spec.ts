import { describe, expect, it } from 'vitest';
import isValidNIP from './index.js';

describe('isValidNIP', () => {
  it('returns false for no input', () => {
    // @ts-expect-error-next-line
    const result = isValidNIP();

    expect(result).toBe(false);
  });

  it('returns false for non-numeric input', () => {
    const result = isValidNIP('elephants');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidNIP('010499966fox');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidNIP('010499966FOX');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with invalid length', () => {
    const result = isValidNIP('123');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with valid length', () => {
    const result = isValidNIP('4852611332');

    expect(result).toBe(false);
  });

  it('returns true for valid numeric input', () => {
    const result = isValidNIP(5252611332);

    expect(result).toBe(true);
  });

  it('returns true for valid input', () => {
    const result = isValidNIP('5252611332');

    expect(result).toBe(true);
  });

  it('returns true for valid input with spaces', () => {
    const result = isValidNIP('525 261 13 32');

    expect(result).toBe(true);
  });

  it('returns true for valid input with dashes', () => {
    const result = isValidNIP('525-261-13-32');

    expect(result).toBe(true);
  });
});
