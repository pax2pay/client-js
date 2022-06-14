import { Segment } from "./Segment"

export interface FlightInfo {
	outbound: Segment
	homebound?: Segment
}

export namespace FlightInfo {
	export function is(value: FlightInfo | any): value is FlightInfo {
		return (
			typeof value == "object" &&
			Segment.is(value.outbound) &&
			(value.homebound == undefined) == Segment.is(value.homebound)
		)
	}
}
