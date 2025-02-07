import * as isoly from "isoly"
import { FlightInfo } from "./FlightInfo"
import { Passengers } from "./Passengers"
import { References } from "./References"

export interface FlightBookingInfoResponse {
	type?: "FLIGHT"
	format?: "flight"
	bookingInfoIdentifier?: string
	trackingId?: string
	passengers: Passengers
	flight: FlightInfo
	references: References
	cost?: number
	currency?: isoly.Currency
	timestamp: isoly.DateTime
}

export namespace FlightBookingInfoResponse {
	export function is(value: FlightBookingInfoResponse | any): value is FlightBookingInfoResponse {
		return (
			typeof value == "object" &&
			(value.type == "FLIGHT" || value.format == "flight") &&
			(value.bookingInfoIdentifier == undefined || typeof value.bookingInfoIdentifier == "string") &&
			(value.trackingId == undefined || typeof value.trackingId == "string") &&
			Passengers.is(value.passengers) &&
			FlightInfo.is(value.flight) &&
			References.is(value.references) &&
			(value.cost == undefined || typeof value.cost == "number") &&
			(value.currency == undefined || isoly.Currency.is(value.currency)) &&
			isoly.DateTime.is(value.timestamp)
		)
	}
}
