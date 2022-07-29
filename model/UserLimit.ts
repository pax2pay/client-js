import { Currency } from "isoly"

/**
 * User's limits
 */
export interface UserLimit {
	currency: Currency
	limit: number
	setBy?: "USER" | "CATEGORY"
}
