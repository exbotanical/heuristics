import { not } from '../src';

describe('miscellaneous functions', () => {
	it('returns true when false', () => {
		expect(not(false)).toBe(true);
	});

	it('returns false when true', () => {
		expect(not(true)).toBe(false);
	});

	it('returns true when falsy', () => {
		expect(not(0)).toBe(true);
		expect(not(null)).toBe(true);
		expect(not(undefined)).toBe(true);
		expect(not('')).toBe(true);
		expect(not(NaN)).toBe(true);
	});

	it('returns false when truthy', () => {
		expect(not(1)).toBe(false);
		expect(not([])).toBe(false);
		expect(not({})).toBe(false);
	});
});
