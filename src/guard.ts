import { isObject, isArray, isString } from './type';

/**
 * Determine whether the given object, array, or string is __not__ empty
 * @param testValue - a value to test
 *
 * @public
 */
export function notEmpty(testValue: unknown) {
	if (isArray(testValue)) return !!testValue.length;
	if (isObject(testValue)) return !!Object.keys(testValue).length;
	if (isString(testValue)) return !!testValue;

	return false;
}

/**
 * Determine whether a given value is __not__ undefined
 * @param testValue - a value to test
 * @returns
 *
 * @public
 */
export function isDefined<T>(testValue: T | undefined) {
	return typeof testValue !== 'undefined';
}

/**
 * Determine whether a given value is __not__ null
 * @param testValue - a value to test
 * @returns
 *
 * @public
 */
export function isNonNull<T>(testValue: T | null): testValue is T {
	return testValue !== null;
}

/**
 * Determine whether an argument is neither null, nor undefined
 * @param testValue - a value to test
 * @returns
 *
 * @public
 */
export function isExtant<T>(testValue: T | null | undefined): testValue is T {
	return isDefined(testValue) && isNonNull(testValue);
}

/**
 * Determine if a property does __not__ exist on an object or its prototype chain
 * @param testObj - a target object to test
 * @param prop - a property to check for in the given object or its prototype
 *
 * @public
 */
export function notInPrototype(testObj: object, prop: PropertyKey) {
	return !prop || !Reflect.has(testObj, prop);
}
