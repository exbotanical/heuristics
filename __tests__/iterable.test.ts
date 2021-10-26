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

	it('an iterable range of numbers evaluates string numerics', () => {
		expect('5' in range(1, 10)).toBe(true);
		expect(1 in range('1', '10')).toBe(true);
		expect('10' in range(1, 10)).toBe(true);
		expect(11 in range('1', '10')).toBe(false);
	});

	it('returns an empty array when provided non-number or string', () => {
		// @ts-expect-error
		expect(range('a', [])).toStrictEqual([]);
		// @ts-expect-error
		expect(range([], 'e')).toStrictEqual([]);
		// @ts-expect-error
		expect(range(1, [])).toStrictEqual([]);
		// @ts-expect-error
		expect(range([], 12)).toStrictEqual([]);
	});

	it('returns false when a generated range function is provided non-number or string', () => {
		const handler = range(0, 1000);
		// @ts-expect-error
		expect({} in handler).toStrictEqual(false);
		// @ts-expect-error
		expect([] in handler).toStrictEqual(false);
		const e = () => {};
		// @ts-expect-error
		expect(e in handler).toStrictEqual(false);
	});
});
