import * as isoly from "isoly"
import { Room } from "./Room"

export interface HotelInfo {
	checkIn?: isoly.Date
	checkOut?: isoly.Date
	hotelName?: string
	rooms?: Room[]
}
export namespace HotelInfo {
	export function is(value: HotelInfo | any): value is HotelInfo {
		return typeof value == "object" && isoly.Date.is(value.checkIn)
	}
}
