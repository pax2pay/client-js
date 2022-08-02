import * as isoly from "isoly"

/**
 * Limits for the user
 */
export interface UserLimitsRequest {
	currency: isoly.Currency
	limit: number
}

export namespace UserLimitsRequest {
	export function is(value: UserLimitsRequest | any): value is UserLimitsRequest {
		return typeof value == "object" && isoly.Currency.is(value.currency) && typeof value.limit == "number"
	}
}
