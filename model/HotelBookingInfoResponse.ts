import * as isoly from "isoly"
import { HotelInfo } from "./HotelInfo"
import { Passengers } from "./Passengers"
import { References } from "./References"

export interface HotelBookingInfoResponse {
	type: "HOTEL"
	bookingInfoIdentifier?: string
	trackingId?: string
	passengers?: Passengers
	hotel?: HotelInfo
	references?: References
	cost?: number
	currency?: isoly.Currency
	timestamp: isoly.DateTime
}
