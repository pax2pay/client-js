import { SuggestedCardTypeOptions } from "./SuggestedCardTypeOptions"
import { SuggestedPaymentMethodResponse } from "./SuggestedPaymentMethodResponse"
import { SuggestedUsageOptions } from "./SuggestedUsageOptions"

export interface SuggestedCardPaymentMethodResponse extends SuggestedPaymentMethodResponse {
	cardType: SuggestedCardTypeOptions
	usage: SuggestedUsageOptions
}
