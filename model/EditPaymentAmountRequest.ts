import * as isoly from "isoly"
import { isly } from "isly"

export interface EditPaymentAmountRequest {
	amount: number
	currency: isoly.Currency
}

export namespace EditPaymentAmountRequest {
	export const type = isly.object<EditPaymentAmountRequest>({
		amount: isly.number(),
		currency: isly.fromIs("Currency", isoly.Currency.is),
	})
	export const is = type.is
}
