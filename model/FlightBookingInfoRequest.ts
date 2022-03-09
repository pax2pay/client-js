import * as isoly from "isoly"

export interface FlightBookingInfoRequest {
	passengers?: Passengers
	flight?: FlightInfo
	references?: References
	cost?: number
	currency?: isoly.Currency
	timestamp?: isoly.DateTime
}
interface Passengers {
	leadPassengerName?: string
	adults?: number
	children?: number
	infants?: number
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
class References {
	supplierCode?: string
	supplierName?: string
	supplierBookingReference?: string
	agentBookingReference?: string
	fabBasketReference?: string
	syndicatorName?: string
}
