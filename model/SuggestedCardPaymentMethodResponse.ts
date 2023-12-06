import { SuggestedCardDeliveryOptions } from "./SuggestedCardDeliveryOptions"
import { SuggestedCardTypeOptions } from "./SuggestedCardTypeOptions"
import { SuggestedPaymentMethodResponse } from "./SuggestedPaymentMethodResponse"
import { SuggestedSchedulesOptions } from "./SuggestedSchedulesOptions"
import { SuggestedUsageOptions } from "./SuggestedUsageOptions"

export interface SuggestedCardPaymentMethodResponse extends SuggestedPaymentMethodResponse {
	cardType: SuggestedCardTypeOptions
	usage: SuggestedUsageOptions
	delivery?: SuggestedCardDeliveryOptions
	schedules?: SuggestedSchedulesOptions
}
