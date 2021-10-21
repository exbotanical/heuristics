import { not, notEmpty, notNullOrUndefined, notInPrototype } from '../src';

describe('base not', () => {
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

describe('base notEmpty', () => {
	it('returns true when not empty', () => {
		expect(notEmpty({ a: null })).toBe(true);
		expect(notEmpty({ a: 1 })).toBe(true);

		expect(notEmpty([1])).toBe(true);
		expect(notEmpty([null])).toBe(true);

		expect(notEmpty('0')).toBe(true);
	});

	it('returns false when empty', () => {
		expect(notEmpty({})).toBe(false);
		expect(notEmpty([])).toBe(false);
		expect(notEmpty('')).toBe(false);
	});

	it('returns false when provided any value other than an array, object, or string', () => {
		expect(notEmpty(9)).toBe(false);
		expect(notEmpty(null)).toBe(false);
		expect(notEmpty(undefined)).toBe(false);
		expect(notEmpty(NaN)).toBe(false);
	});
});

describe('not null or undefined checks', () => {
	const nullOrUndefined = [null, undefined];
	const notNullUndefined = [[], 9, {}, 0, false];

	it('returns false when null or undefined', () => {
		nullOrUndefined.forEach((_) => expect(notNullOrUndefined(_)).toBe(false));
	});

	it('returns true when not null or undefined', () => {
		notNullUndefined.forEach((_) => expect(notNullOrUndefined(_)).toBe(true));
	});
});

describe('prototype exclusion checks', () => {
	const proto = { foo: 'foo' };
	const obj = Object.create(proto);

	it('returns true when object or its prototype does not contain property', () => {
		expect(notInPrototype(obj, 'bar')).toBe(true);
	});

	it("returns false when object or object's prototype contains property", () => {
		expect(notInPrototype(obj, 'foo')).toBe(false);
	});
});
