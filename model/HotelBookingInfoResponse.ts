import * as isoly from "isoly"
import { HotelInfo } from "./HotelInfo"
import { Passengers } from "./Passengers"
import { References } from "./References"

export interface HotelBookingInfoResponse {
	format: "hotel"
	bookingInfoIdentifier?: string
	trackingId?: string
	passengers?: Passengers
	hotel?: HotelInfo
	references?: References
	cost?: number
	currency?: isoly.Currency
	timestamp: isoly.DateTime
}

export namespace HotelBookingInfoResponse {
	export function is(value: HotelBookingInfoResponse | any): value is HotelBookingInfoResponse {
		return (
			typeof value == "object" &&
			value.format == "hotel" &&
			(value.bookingInfoIdentifier == undefined || typeof value.bookingInfoIdentifier == "string") &&
			(value.trackingId == undefined || typeof value.trackingId == "string") &&
			(value.passengers == undefined || Passengers.is(value.passengers)) &&
			(value.hotel == undefined || HotelInfo.is(value.hotel)) &&
			(value.references == undefined || References.is(value.references)) &&
			(value.cost == undefined || typeof value.cost == "number") &&
			(value.currency == undefined || isoly.Currency.is(value.currency)) &&
			isoly.DateTime.is(value.timestamp)
		)
	}
}
