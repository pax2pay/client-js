import * as isoly from "isoly"

/**
 * User's limits
 */
export interface UserLimit {
	currency: isoly.Currency
	limit: number
	setBy: "USER" | "CATEGORY"
}
