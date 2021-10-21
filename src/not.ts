import { isObject, isArray, isString } from './type';

import type {
	_INonEmptyArray,
	_INonEmptyObject,
	_INonEmptyString,
	_INotNullOrUndefined
} from './types';

/**
 * Evaluate whether the given object, array, or string is __not__ empty
 * @param testValue - a value to test
 *
 * @public
 */
export const notEmpty = (
	testValue: unknown
): testValue is
	| _INonEmptyArray
	| _INonEmptyObject<typeof testValue>
	| _INonEmptyString<typeof testValue> => {
	if (isArray(testValue)) return !!testValue.length;
	if (isObject(testValue)) return !!Object.keys(testValue).length;
	if (isString(testValue)) return !!testValue;

	return false;
};

/**
 * Determine whether a given value is __not__ null or undefined
 * @param testValue - a value to test
 *
 * @public
 */
export const notNullOrUndefined = (
	testValue: unknown
): testValue is _INotNullOrUndefined<typeof testValue> => {
	return !(testValue === null || testValue === undefined);
};

/**
 * Determine if a property does __not__ exist on an object or its prototype chain
 * @param testObj - a target object to test
 * @param prop - a property to check for in the given object or its prototype
 *
 * @public
 */
export const notInPrototype = (testObj: object, prop: PropertyKey) => {
	return !prop || !Reflect.has(testObj, prop);
};

/**
 * Convert an expression or value to a negated boolean cast of itself
 * @param testValue - a value to test
 *
 * @public
 */
export const not = (testValue: unknown) => !testValue;
