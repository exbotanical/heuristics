import { isNumber, isString } from './type';

/**
 * Generate an iterable range
 * @param start - lower limit of range
 * @param end - upper limit of range
 * @example if (n in range(1, 20)) doStuff();
 *
 * @public
 */
export function range(start: string | number, end: string | number) {
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
				// empty array may also evaluate to empty string
				if ((isString(prop) && prop !== '') || isNumber(prop)) {
					return prop >= target.start && prop <= target.end;
				}

				return false;
			}
		}
	);
}
