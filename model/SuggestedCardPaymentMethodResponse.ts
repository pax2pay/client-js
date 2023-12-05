import { SuggestedCardTypeOptions } from "./SuggestedCardTypeOptions"
import { SuggestedDelivery } from "./SuggestedDelivery"
import { SuggestedPaymentMethodResponse } from "./SuggestedPaymentMethodResponse"
import { SuggestedSchedules } from "./SuggestedSchedules"
import { SuggestedUsageOptions } from "./SuggestedUsageOptions"

export interface SuggestedCardPaymentMethodResponse extends SuggestedPaymentMethodResponse {
	cardType: SuggestedCardTypeOptions
	usage: SuggestedUsageOptions
	delivery?: SuggestedDelivery
	schedules?: SuggestedSchedules
}
