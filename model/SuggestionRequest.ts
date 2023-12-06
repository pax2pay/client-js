import { Currency } from "isoly"
import { BookingInfoRequest } from "./BookingInfoRequest"
import { SuggestionCardPaymentMethodRequest } from "./SuggestionCardPaymentMethodRequest"
import { SuggestionMerchantRequest } from "./SuggestionMerchantRequest"

export interface SuggestionRequest {
	merchant?: SuggestionMerchantRequest
	amount: number
	currency: Currency
	meta?: BookingInfoRequest
	paymentMethod?: SuggestionCardPaymentMethodRequest //Use the specific types here, add transfer when available
}

export namespace SuggestionRequest {
	export function is(value: SuggestionRequest | any): value is SuggestionRequest {
		return (
			typeof value == "object" &&
			(value.merchant == undefined || SuggestionMerchantRequest.is(value.merchant)) &&
			typeof value.amount == "number" &&
			Currency.is(value.currency) &&
			(value.paymentMethod == undefined || SuggestionCardPaymentMethodRequest.is(value.paymentMethod))
		)
	}
}
