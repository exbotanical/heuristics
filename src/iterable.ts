import { isNumber, isString } from './type';

/**
 * Generate an iterable range
 * @param start - lower limit of range
 * @param end - upper limit of range
 * @example if (n in range(1, 20)) doStuff();
 *
 * @public
 */
export function range(start: unknown, end: unknown) {
	if (
		(!isNumber(start) && !isString(start)) ||
		(!isNumber(end) && !isString(end))
	) {
		return [];
	}

	return new Proxy(
		{ start, end },
		{
			has(target, prop) {
				if (isString(prop) || isNumber(prop)) {
					return prop >= target.start && prop <= target.end;
				}

				return false;
			}
		}
	);
}
