import * as isoly from "isoly"
import { HotelInfo } from "./HotelInfo"
import { Passengers } from "./Passengers"
import { References } from "./References"

export interface HotelBookingInfoRequest {
	hotel?: HotelInfo
	references?: References
	passengers?: Passengers
	cost?: number
	currency?: isoly.Currency
	timestamp?: isoly.DateTime
}
export namespace HotelBookingInfoRequest {
	export function is(value: HotelBookingInfoRequest | any): value is HotelBookingInfoRequest {
		return (
			typeof value == "object" &&
			HotelInfo.is(value.hotel) &&
			References.is(value.references) &&
			Passengers.is(value.passengers) &&
			isoly.DateTime.is(value.timestamp)
		)
	}
}
