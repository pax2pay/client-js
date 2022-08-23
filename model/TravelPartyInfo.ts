/**
 * Information about the passengers
 */
export interface TravelPartyInfo {
	travelPartyLeadPax?: string
	travelPartyNumAdult?: number
	travelPartyNumChild?: number
	travelPartyNumInfant?: number
}

export namespace TravelPartyInfo {
	export function is(value: TravelPartyInfo | any): value is TravelPartyInfo {
		return (
			typeof value == "object" &&
			(value.travelPartyLeadPax == undefined || typeof value.travelPartyLeadPax == "string") &&
			(value.travelPartyNumAdult == undefined || typeof value.travelPartyNumAdult == "number") &&
			(value.travelPartyNumChild == undefined || typeof value.travelPartyNumChild == "number") &&
			(value.travelPartyNumInfant == undefined || typeof value.travelPartyNumInfant == "number")
		)
	}
}
