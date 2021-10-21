/**
 * @internal
 */
export type _INonEmptyArray<T = any> = [T, ...T[]];

/**
 * @internal
 */
export type _INonEmptyObject<T> = T extends {} ? never : T;

/**
 * @internal
 */
export type _INonEmptyString<T> = T extends '' ? never : T;

/**
 * @internal
 */
export type _INotNullOrUndefined<T> = T extends null | undefined ? never : T;

/**
 * @public
 */
export interface IPredicate<T> {
	(args: T): boolean;
}
