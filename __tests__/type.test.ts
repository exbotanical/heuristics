import {
	isFunction,
	isGenerator,
	isAsyncFunction,
	isAnonymousFunction,
	isNumber,
	isFloat,
	isString,
	isError,
	isObject,
	isArray,
	isBoolean
} from '../src';

/* Local Mocks */
const obj = {};
const arr: [] = [];
const str = '';
const num = 9;
const fn = () => {};
const err = new Error();

const notObject = [arr, fn, NaN, null, num, str, Symbol('sym'), undefined];
const notArray = [fn, NaN, null, num, obj, str, Symbol('sym'), undefined];
const notString = [arr, fn, NaN, null, num, obj, Symbol('sym'), undefined];
const notFunction = [arr, NaN, null, num, obj, str, Symbol('sym'), undefined];
const notNumber = [arr, fn, NaN, null, obj, str, Symbol('sym'), undefined];

describe('type checks', () => {
	it('returns true for matched types', () => {
		expect(isObject(obj)).toBe(true);
		expect(isString(str)).toBe(true);
		expect(isArray(arr)).toBe(true);
		expect(isFunction(fn)).toBe(true);
		expect(isError(err)).toBe(true);
		expect(isNumber(num)).toBe(true);
	});

	it('returns false for non-matched types', () => {
		notObject.forEach((_) => expect(isObject(_)).toBe(false));
		notArray.forEach((_) => expect(isArray(_)).toBe(false));
		notString.forEach((_) => expect(isString(_)).toBe(false));
		notFunction.forEach((_) => expect(isFunction(_)).toBe(false));
		notNumber.forEach((_) => expect(isNumber(_)).toBe(false));
	});

	it('returns true for floats', () => {
		[0.1, 1.1, -1.1, 11.299].forEach((_) => expect(isFloat(_)).toBe(true));
	});

	it('returns false for non-floats', () => {
		[1, 2, -1, 0, ...notNumber].forEach((_) => expect(isFloat(_)).toBe(false));
	});

	it('returns true for booleans', () => {
		[true, false].forEach((_) => expect(isBoolean(_)).toBe(true));
	});

	it('returns false for non-booleans', () => {
		[{}, ...notObject].forEach((_) => expect(isBoolean(_)).toBe(false));
	});
});

describe('function heuristics', () => {
	const generator = function* gen() {};
	const anon = (_: any) => _;
	const anon2 = function () {};
	const anonGen = function* () {};
	const regular = function name() {};
	const asyncf = async function a() {};
	const asyncAnon = async function () {};

	const all = [generator, anon, anon2, regular, asyncf, asyncAnon, anonGen];
	const irregular = [generator, anon, anon2, asyncf, anonGen, asyncAnon];
	const nongen = [anon, anon2, regular, asyncf];
	const sync = [generator, anon, anon2, anonGen, regular];

	it('returns true for all function types', () => {
		all.forEach((_) => expect(isFunction(_)).toBe(true));
	});

	it('returns true for anonymous functions', () => {
		expect(isAnonymousFunction(anon)).toBe(true);
		expect(isAnonymousFunction(anon2)).toBe(true);
		expect(isAnonymousFunction(anonGen)).toBe(true);
		expect(isAnonymousFunction(asyncAnon)).toBe(true);
	});

	it('returns fsalse for non-anonymous functions', () => {
		expect(isAnonymousFunction(regular)).toBe(false);
		expect(isAnonymousFunction(asyncf)).toBe(false);
	});

	it('returns true for generator functions', () => {
		[generator, anonGen].forEach((_) => expect(isGenerator(_)).toBe(true));
	});

	it('returns false for non-generator functions', () => {
		nongen.forEach((_) => expect(isGenerator(_)).toBe(false));
	});

	it('returns true for async functions', () => {
		expect(isAsyncFunction(asyncf)).toBe(true);
		expect(isAsyncFunction(asyncAnon)).toBe(true);
	});

	it('returns false for synchronous functions and generators', () => {
		sync.forEach((_) => expect(isAsyncFunction(_)).toBe(false));
	});
});
