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
