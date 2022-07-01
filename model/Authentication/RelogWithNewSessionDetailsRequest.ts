/**
 * Optionally change tracking id or consumers' reference. Does not need to be present.
 */
export interface RelogWithNewSessionDetailsRequest {
	trackingId?: string
	consumersReference?: string
}
