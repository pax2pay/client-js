import * as isoly from "isoly"

/**
 * Limits for the user
 */
export interface UserLimitsRequest {
	currency: isoly.Currency
	limit: number
}
