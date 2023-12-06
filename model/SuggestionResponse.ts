import { Currency } from "isoly"
import { MerchantResponse } from "./MerchantResponse"
import { SuggestedCardMetaOptions } from "./SuggestedCardMetaOptions"
import { SuggestedPaymentMethodResponses } from "./SuggestedPaymentMethodResponses"

export interface SuggestionResponse {
	merchant: MerchantResponse
	amount: number
	currency: Currency
	meta?: SuggestedCardMetaOptions
	paymentMethod: SuggestedPaymentMethodResponses
}
