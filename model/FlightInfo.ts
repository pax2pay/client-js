import * as isoly from "isoly"

export interface FlightInfo {
	outbound: Segment
	homebound?: Segment
}

interface Segment {
	from: string
	to: string
	date: isoly.Date
	flightNumbers?: string[]
}
