import * as isoly from "isoly"

export interface Segment {
	from: string
	to: string
	date: isoly.Date
	flightNumbers?: string[]
}

export namespace Segment {
	export function is(value: Segment | any): value is Segment {
		return (
			typeof value == "object" &&
			typeof value.from == "string" &&
			typeof value.to == "string" &&
			isoly.Date.is(value.date) &&
			(value.flightNumbers == undefined ||
				(Array.isArray(value.flightNumbers) && value.flightNumbers.every((item: any) => typeof item == "string")))
		)
	}
}
