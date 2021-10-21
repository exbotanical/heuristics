import {
	isObject,
	isArray,
	isString,
	isFunction,
	contract,
	testForEach
} from '../src';

const obj = {};
const arr: [] = [];
const str = '';
const num = 9;
const fn = () => {};
const err = new Error();

const notObject = [arr, err, fn, NaN, null, num, str, Symbol('sym'), undefined];
const notArray = [err, fn, NaN, null, num, obj, str, Symbol('sym'), undefined];
const notString = [arr, err, fn, NaN, null, num, obj, Symbol('sym'), undefined];
const notFunction = [
	arr,
	err,
	NaN,
	null,
	num,
	obj,
	str,
	Symbol('sym'),
	undefined
];

describe('base contracts', () => {
	const mustBeObj = contract(isObject);
	const mustBeArr = contract(isArray);
	const mustBeStr = contract(isString);
	const mustBeFn = contract(isFunction);

	it('returns undefined when a contract is fulfilled', () => {
		expect(mustBeObj(obj)).toBeUndefined();
		expect(mustBeStr(str)).toBeUndefined();
		expect(mustBeArr(arr)).toBeUndefined();
		expect(mustBeFn(fn)).toBeUndefined();
	});

	it('throws an error when contracts are violated', () => {
		notObject.forEach((_) => expect(() => mustBeObj(_)).toThrow());
		notArray.forEach((_) => expect(() => mustBeArr(_)).toThrow());
		notString.forEach((_) => expect(() => mustBeStr(_)).toThrow());
		notFunction.forEach((_) => expect(() => mustBeFn(_)).toThrow());
	});

	it('allows a custom error message', () => {
		const msg = 'Must be function';

		const mustBeFn = contract(isFunction, msg);

		try {
			mustBeFn('');
		} catch ({ message }) {
			expect(message).toBe(msg); // eslint-disable-line jest/no-conditional-expect
		}
	});
});

describe("'testForEach'", () => {
	const data = {
		data: [],
		status: 200,
		ok: true,
		error: null
	};

	const notData = {};

	const has = (p: string) => (o: typeof data | {}) => p in o;

	const isResponse = testForEach(
		has('data'),
		has('status'),
		has('ok'),
		has('error')
	);

	it('returns true when test is fulfilled', () => {
		expect(isResponse(data)).toBe(true);
	});

	it('returns false when test is not fulfilled', () => {
		expect(isResponse(notData)).toBe(false);
	});
});
