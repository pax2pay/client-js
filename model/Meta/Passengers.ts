export interface Passengers {
	leadPassengerName?: string
	adults?: number
	children?: number
	infants?: number
}
export namespace Passengers {
	export function is(value: Passengers | any): value is Passengers {
		return typeof value == "object" && typeof value.leadPassengerName == "string"
	}
}
