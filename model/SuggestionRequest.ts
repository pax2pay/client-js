import { Currency } from "isoly"
import { SuggestionCardPaymentMethodRequest } from "./SuggestionCardPaymentMethodRequest"
import { SuggestionMerchantRequest } from "./SuggestionMerchantRequest"
import { SuggestionPaymentMethodRequest } from "./SuggestionPaymentMethodRequest"

export interface SuggestionRequest {
	merchant: SuggestionMerchantRequest
	amount: number
	currency: Currency
	paymentMethod?: SuggestionCardPaymentMethodRequest //Use the specific types here, add transfer when available
}

export namespace SuggestionRequest {
	export function is(value: SuggestionRequest | any): value is SuggestionRequest {
		return (
			typeof value == "object" &&
			SuggestionMerchantRequest.is(value.merchant) &&
			typeof value.amount == "number" &&
			Currency.is(value.currency) &&
			(value.paymentMethod == undefined || SuggestionCardPaymentMethodRequest.is(value.paymentMethod))
		)
	}
}
