import * as isoly from "isoly"
import { FlightInfo } from "./FlightInfo"
import { Passengers } from "./Passengers"
import { References } from "./References"

export interface FlightBookingInfoRequest {
	passengers?: Passengers
	flight?: FlightInfo
	references?: References
	cost?: number
	currency?: isoly.Currency
	timestamp?: isoly.DateTime
}

export namespace FlightBookingInfoRequest {
	export function is(value: FlightBookingInfoRequest | any): value is FlightBookingInfoRequest {
		return (
			typeof value == "object" &&
			(value.passengers == undefined || Passengers.is(value.passengers)) &&
			(value.flight == undefined || FlightInfo.is(value.flight)) &&
			(value.references == undefined || References.is(value.references)) &&
			(value.cost == undefined || typeof value.cost == "number") &&
			(value.currency == undefined || isoly.Currency.is(value.currency)) &&
			(value.timestamp == undefined || isoly.DateTime.is(value.timestamp))
		)
	}
}
