import * as isoly from "isoly"
import { FlightInfo } from "./FlightInfo"
import { Passengers } from "./Passengers"
import { References } from "./References"

export interface FlightBookingInfoResponse {
	type: "FLIGHT"
	bookingInfoIdentifier?: string
	trackingId?: string
	passengers: Passengers
	flight: FlightInfo
	references: References
	cost?: number
	currency?: isoly.Currency
	timestamp: isoly.DateTime
}
