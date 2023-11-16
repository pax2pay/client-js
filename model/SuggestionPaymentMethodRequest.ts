import { PaymentMethodType } from "./PaymentMethodType"

export interface SuggestionPaymentMethodRequest {
	type: PaymentMethodType
	accountId?: string
}

export namespace SuggestionPaymentMethodRequest {
	export function is(value: SuggestionPaymentMethodRequest | any): value is SuggestionPaymentMethodRequest {
		return (
			typeof value == "object" &&
			PaymentMethodType.is(value.type) &&
			(value.accountId == undefined || typeof value.accountId == "string")
		)
	}
}
