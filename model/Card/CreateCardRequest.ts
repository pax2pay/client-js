import * as isoly from "isoly"
import { AccountState } from "../Account/AccountState"
import { BookingInfoRequest } from "../Meta/BookingInfoRequest"
import { ProviderCode } from "../Provider/ProviderCode"
import { CardAmendmentScheduledTaskRequest } from "./CardAmendmentScheduledTaskRequest"
import { CardDeliveryRequest } from "./CardDeliveryRequest"
import { CardScheduleRequestItem } from "./CardScheduleRequestItem"
import { CardStateChangeScheduledTaskRequest } from "./CardStateChangeScheduledTaskRequest"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CardUsage } from "./CardUsage"
import { ScheduledTaskRequest } from "./ScheduledTaskRequest"
import { YearMonth } from "./YearMonth"

/**
 * Creates a virtual card.
 */
export interface CreateCardRequest {
	cardType: CardTypeSpecification | string
	bookingInfo?: BookingInfoRequest
	providerAccountId?: string
	providerCode: ProviderCode
	balance: number
	currency: isoly.Currency
	fundingDate?: string
	expiryDate?: YearMonth
	usage?: CardUsage
	schedule?: (CardAmendmentScheduledTaskRequest | CardStateChangeScheduledTaskRequest | ScheduledTaskRequest)[]
	friendlyName?: string
	delivery?: CardDeliveryRequest
	state?: AccountState
}

export namespace CreateCardRequest {
	export function is(value: CreateCardRequest | any): value is CreateCardRequest {
		return (
			typeof value == "object" &&
			(CardTypeSpecification.is(value.cardType) || typeof value.cardType == "string") &&
			(value.bookingInfo == undefined || BookingInfoRequest.is(value.bookingInfo)) &&
			(value.providerAccountId == undefined || typeof value.providerAccountId == "string") &&
			ProviderCode.is(value.providerCode) &&
			typeof value.balance == "number" &&
			isoly.Currency.is(value.currency) &&
			(value.fundingDate == undefined || typeof value.fundingDate == "string") &&
			(value.expiryDate == undefined || YearMonth.is(value.expiryDate)) &&
			(value.usage == undefined || CardUsage.is(value.usage)) &&
			(value.schedule == undefined ||
				(Array.isArray(value.schedule) &&
					value.schedule.every((item: any) => CardScheduleRequestItem.is(item) || ScheduledTaskRequest.is(item)))) && //maybe redundant types
			(value.friendlyName == undefined || typeof value.friendlyName == "string") &&
			(value.delivery == undefined || CardDeliveryRequest.is(value.delivery)) &&
			(value.state == undefined || AccountState.is(value.state))
		)
	}
}
