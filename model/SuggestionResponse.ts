import { Currency } from "isoly"
import { MerchantResponse } from "./MerchantResponse"
import { SuggestedPaymentMethodResponses } from "./SuggestedPaymentMethodResponses"

export interface SuggestionResponse {
	merchant: MerchantResponse
	amount: number
	currency: Currency
	paymentMethod: SuggestedPaymentMethodResponses
}
