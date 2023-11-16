import { Currency } from "isoly"
import { SuggestionMerchantRequest } from "./SuggestionMerchantRequest"
import { SuggestionPaymentMethodRequest } from "./SuggestionPaymentMethodRequest"

export interface SuggestionRequest {
	merchant: SuggestionMerchantRequest
	amount: number
	currency: Currency
	paymentMethod?: SuggestionPaymentMethodRequest
}
