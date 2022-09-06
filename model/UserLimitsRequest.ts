import { Currency } from "isoly"

/**
 * Limits for the user
 */
export interface UserLimitsRequest {
	currency: Currency
	limit?: number
}

export namespace UserLimitsRequest {
	export function is(value: UserLimitsRequest | any): value is UserLimitsRequest {
		return (
			typeof value == "object" &&
			Currency.is(value.currency) &&
			(value.limit == undefined || typeof value.limit == "number")
		)
	}
}
