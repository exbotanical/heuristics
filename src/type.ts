/**
 * Test whether a given value is a function, including async and generator functions
 * @param testValue - a value to test
 *
 * @public
 */
export const isFunction = (testValue: unknown): testValue is Function => {
	if (testValue) {
		const result = {}.toString.call(testValue);

		return (
			result === '[object Function]' ||
			result === '[object AsyncFunction]' ||
			result === '[object GeneratorFunction]'
		);
	}

	return false;
};

/**
 * Test whether a given value is a generator function
 * @param testValue - a value to test
 *
 * @public
 */
export const isGenerator = (
	testValue: unknown
): testValue is GeneratorFunction =>
	!!testValue &&
	isFunction(testValue) &&
	testValue.constructor.name === 'GeneratorFunction';

/**
 * Test whether a given value is an async function
 * @param testValue - a value to test
 *
 * @public
 */
export const isAsyncFunction = (
	testValue: unknown
): testValue is Promise<any> => {
	return (
		!!testValue && {}.toString.call(testValue) === '[object AsyncFunction]'
	);
};

/**
 * Test whether a given value is an anonymous function
 * @param testValue - a value to test
 *
 * @public
 */
export const isAnonymousFunction = (
	testValue: unknown
): testValue is Omit<Function, 'name'> => {
	return (
		!!testValue &&
		isFunction(testValue) &&
		!/(?<=\bfunction\s)(\w+)/.test(testValue.toString())
	);
};

/**
 * Test whether a given value is a regular function i.e. not async, generator, or anonymous
 * @param testValue - a value to test
 *
 * @public
 */
export const isRegularFunction = (
	testValue: unknown
): testValue is Function & typeof testValue extends GeneratorFunction
	? never
	: typeof testValue & typeof testValue extends Promise<any>
	? never
	: typeof testValue => {
	return (
		!!testValue &&
		isFunction(testValue) &&
		/(?<=\bfunction\s)(\w+)/.test(testValue.toString())
	);
};

/**
 * Test whether a given value is a number
 * @param testValue - a value to test
 *
 * @public
 */
export const isNumber = (testValue: unknown): testValue is number => {
	return typeof testValue == 'number' && !isNaN(testValue);
};

/**
 * Test whether a given value is a floating point number
 * @param testValue - a value to test
 *
 * @public
 */
export const isFloat = (testValue: unknown): testValue is number => {
	if (typeof testValue === 'symbol' || (testValue !== 0 && !testValue)) {
		return false;
	}

	return Number(testValue) === testValue && testValue % 1 !== 0;
};

/**
 * Test whether a given value is a string
 * @param testValue - a value to test
 *
 * @public
 */
export const isString = (testValue: unknown): testValue is string => {
	return {}.toString.call(testValue) == '[object String]';
};

/**
 * Test whether a given value is an Error
 * @param testValue - a value to test
 *
 * @public
 */
export const isError = (testValue: unknown): testValue is Error => {
	return {}.toString.call(testValue) == '[object Error]';
};

/**
 * Test whether a given value is a plain object
 * @param testValue - a value to test
 *
 * @public
 */
export const isObject = (testValue: unknown): testValue is Object => {
	return {}.toString.call(testValue) == '[object Object]';
};

/**
 * Test whether a given value is an array
 * @param testValue - a value to test
 *
 * @public
 */
export const isArray = (testValue: unknown): testValue is any[] => {
	return Array.isArray(testValue);
};

/**
 * Test whether a given value is a Boolean
 * @param testValue - a value to test
 *
 * @public
 */
export const isBoolean = (testValue: unknown): testValue is boolean => {
	return (
		testValue === true ||
		testValue === false ||
		{}.toString.call(testValue) === '[object Boolean]'
	);
};
