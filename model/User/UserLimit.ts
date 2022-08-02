import * as isoly from "isoly"

/**
 * User's limits
 */
export interface UserLimit {
	currency: isoly.Currency
	limit: number
	setBy: "USER" | "CATEGORY"
}

export namespace UserLimit {
	export function is(value: UserLimit | any): value is UserLimit {
		return (
			typeof value == "object" &&
			isoly.Currency.is(value.currency) &&
			typeof value.limit == "number" &&
			(value.setBy == "USER" || value.setBy == "CATEGORY")
		)
	}
}
