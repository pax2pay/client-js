import * as isoly from "isoly"
import { FlightInfo } from "./FlightInfo"
import { Passengers } from "./Passengers"
import { References } from "./References"

export interface FlightBookingInfoRequest {
	type?: "FLIGHT"
	passengers: Passengers
	flight: FlightInfo
	references: References
	cost?: number
	currency?: isoly.Currency
	timestamp: isoly.DateTime
}
export namespace FlightBookingInfoRequest {
	export function is(value: FlightBookingInfoRequest | any): value is FlightBookingInfoRequest {
		return (
			typeof value == "object" &&
			(value.type == undefined || value.type == "FLIGHT") &&
			Passengers.is(value.passengers) &&
			FlightInfo.is(value.flight) &&
			References.is(value.references) &&
			(value.cost == undefined || typeof value.cost == "number") &&
			(value.currency == undefined || isoly.Currency.is(value.currency)) &&
			isoly.DateTime.is(value.timestamp)
		)
	}
}
