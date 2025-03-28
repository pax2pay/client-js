import { isly } from "isly"

/**
 * Optionally change tracking id or consumers' reference. Does not need to be present.
 */
export interface AbstractLoginRequest {
	effectiveOrganisation?: string
	trackingId?: string
	consumersReference?: string
}
export namespace AbstractLoginRequest {
	export const type = isly.object<AbstractLoginRequest>({
		effectiveOrganisation: isly.string().optional(),
		trackingId: isly.string().optional(),
		consumersReference: isly.string().optional(),
	})
}
