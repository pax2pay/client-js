import { CardDeliveryRequest } from "./CardDeliveryRequest"
import { CardUsage } from "./CardUsage"
import { ScheduledTaskRequest } from "./ScheduledTaskRequest"
import { SuggestionPaymentMethodRequest } from "./SuggestionPaymentMethodRequest"

export interface SuggestionCardPaymentMethodRequest extends SuggestionPaymentMethodRequest {
	cardType?: string
	usage?: CardUsage
	delivery?: CardDeliveryRequest
	schedules?: ScheduledTaskRequest[]
}

export namespace SuggestionCardPaymentMethodRequest {
	export function is(value: SuggestionCardPaymentMethodRequest | any): value is SuggestionCardPaymentMethodRequest {
		return (
			typeof value == "object" &&
			(value.cardType == undefined || typeof value.cardType == "string") &&
			(value.usage == undefined || CardUsage.is(value.usage)) &&
			SuggestionPaymentMethodRequest.is({ ...value })
		)
	}
}
