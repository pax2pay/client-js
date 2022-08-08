import { Currency } from "isoly"

/**
 * User's limits
 */
export interface UserLimitsResponse {
	currency: Currency
	limit: number
	setBy: "USER" | "CATEGORY"
}
