/**
 * @public
 */
export interface IPredicate<T> {
	(args: T): boolean;
}

/**
 * Require a condition, else throw
 * @param condition - a condition expression
 * @param message - custom error message to be used upon requirement violations
 * @throws when requirement is violated
 *
 * @public
 */
export function requires(
	condition: boolean,
	message = 'contract violation'
): asserts condition {
	if (!condition) {
		throw new Error(message);
	}
}

/**
 * Generate a contractually-bound predicate
 * @param predicate - a predicate function to which the returned function's argument will be passed
 * @param message - custom error message to be used upon contract violations
 * @throws when contract is violated
 *
 * @public
 */
export function contract<T>(predicate: IPredicate<T>, message?: string) {
	return (testValue: T): ReturnType<typeof requires> =>
		requires(predicate(testValue), message);
}

/**
 * Generate a function that accepts a test value on which n predicates are enforced
 * @param predicates - a list of predicate functions to evaluate
 *
 * @public
 */
export function testForEach<T>(...predicates: IPredicate<T>[]) {
	return function (testValue: T) {
		return predicates.every((fn) => fn(testValue));
	};
}
