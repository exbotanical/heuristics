import { range } from '../src';

describe('iterables', () => {
	it('returns an iterable range of numbers', () => {
		expect(5 in range(1, 10)).toBe(true);
		expect(1 in range(1, 10)).toBe(true);
		expect(10 in range(1, 10)).toBe(true);
		expect(11 in range(1, 10)).toBe(false);
	});

	it('returns an iterable range of alphanumeric characters', () => {
		expect('d' in range('a', 'e')).toBe(true);
		expect('a' in range('a', 'e')).toBe(true);
		expect('e' in range('a', 'e')).toBe(true);
		expect('f' in range('a', 'e')).toBe(false);
	});

	it('returns an empty array when provided non-number or string', () => {
		expect(range('a', [])).toStrictEqual([]);
		expect(range([], 'e')).toStrictEqual([]);
		expect(range(1, [])).toStrictEqual([]);
		expect(range([], 12)).toStrictEqual([]);
	});
});
