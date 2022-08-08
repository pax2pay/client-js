import { Currency } from "isoly"

/**
 * Limits for the user
 */
export interface UserLimitsRequest {
	currency: Currency
	limit?: number
}
