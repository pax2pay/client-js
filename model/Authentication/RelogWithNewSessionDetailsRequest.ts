/**
 * Optionally change tracking id or consumers' reference. Does not need to be present.
 */
export interface RelogWithNewSessionDetailsRequest {
	trackingId?: string
	consumersReference?: string
}

export namespace RelogWithNewSessionDetailsRequest {
	export function is(value: RelogWithNewSessionDetailsRequest | any): value is RelogWithNewSessionDetailsRequest {
		return (
			typeof value == "object" &&
			(value.trackingId == undefined || typeof value.trackingId == "string") &&
			(value.consumersReference == undefined || typeof value.consumersReference == "string")
		)
	}
}
