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
			(value.hotel == undefined || HotelInfo.is(value.hotel)) &&
			(value.references == undefined || References.is(value.references)) &&
			(value.passengers == undefined || Passengers.is(value.passengers)) &&
			(value.timestamp == undefined || isoly.DateTime.is(value.timestamp))
		)
	}
}
