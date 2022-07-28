export interface Passengers {
	leadPassengerName?: string
	adults?: number
	children?: number
	infants?: number
}
export namespace Passengers {
	export function is(value: Passengers | any): value is Passengers {
		return (
			typeof value == "object" &&
			(value.leadPassengerName == undefined || typeof value.leadPassengerName == "string") &&
			(value.adults == undefined || typeof value.adults == "number") &&
			(value.children == undefined || typeof value.children == "number") &&
			(value.infants == undefined || typeof value.infants == "number")
		)
	}
}
