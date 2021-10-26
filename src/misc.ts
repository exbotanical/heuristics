/**
 * Convert an expression or value to a negated boolean cast of itself
 * @param testValue - a value to test
 *
 * @public
 */
export function not(testValue: unknown) {
	return !testValue;
}
