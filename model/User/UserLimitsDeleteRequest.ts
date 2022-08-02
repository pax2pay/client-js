import * as isoly from "isoly"

export interface UserLimitsDeleteRequest {
	currency: isoly.Currency
}

export namespace UserLimitsDeleteRequest {
	export function is(value: UserLimitsDeleteRequest | any): value is UserLimitsDeleteRequest {
		return typeof value == "object" && isoly.Currency.is(value.currency)
	}
}
