import * as isoly from "isoly"
import { CardDeliveryRequest } from "./CardDeliveryRequest"

export interface SuggestionCardDeliveryRequest extends Partial<CardDeliveryRequest> {}
export namespace SuggestionCardDeliveryRequest {
	export function is(value: SuggestionCardDeliveryRequest | any): value is SuggestionCardDeliveryRequest {
		return (
			typeof value == "object" &&
			(value.to == undefined ||
				(typeof value.to == "string" && /^.+@.+\..+$/.test(value.to)) ||
				typeof value.to == "object") &&
			(value.message == undefined || typeof value.message == "string") &&
			(value.linkExpiry == undefined || isoly.Date.is(value.linkExpiry))
		)
	}
}
