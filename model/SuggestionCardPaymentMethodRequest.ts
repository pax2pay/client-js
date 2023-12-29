import { CardDeliveryRequest } from "./CardDeliveryRequest"
import { CardUsage } from "./CardUsage"
import { ScheduleEntry } from "./ScheduleEntry"
import { SuggestionCardDeliveryRequest } from "./SuggestionCardDeliveryRequest"
import { SuggestionPaymentMethodRequest } from "./SuggestionPaymentMethodRequest"

export interface SuggestionCardPaymentMethodRequest extends SuggestionPaymentMethodRequest {
	cardType?: string
	usage?: CardUsage
	delivery?: SuggestionCardDeliveryRequest
	schedules?: ScheduleEntry[]
}

export namespace SuggestionCardPaymentMethodRequest {
	export function is(value: SuggestionCardPaymentMethodRequest | any): value is SuggestionCardPaymentMethodRequest {
		return (
			typeof value == "object" &&
			typeof value.accountId == "string" &&
			typeof value.cardType == "string" &&
			(value.usage == undefined || CardUsage.is(value.usage)) &&
			(value.delivery == undefined || CardDeliveryRequest.is(value.delivery)) &&
			(value.schedules == undefined ||
				(Array.isArray(value.schedules) && value.schedules.every((entry: any) => ScheduleEntry.is(entry)))) &&
			SuggestionPaymentMethodRequest.is({ ...value })
		)
	}
}
