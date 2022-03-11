import * as isoly from "isoly"
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
interface FlightInfo {
	outbound?: Segment
	homebound?: Segment
}
interface Segment {
	from?: string
	to?: string
	date?: isoly.Date
}
