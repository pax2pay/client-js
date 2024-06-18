import { isly } from "isly"
import { OrganisationStatus } from "./OrganisationStatus"

/**
 * Information for creating organisation
 */
export interface OrganisationRequest {
	name: string
	status: OrganisationStatus
}

export namespace OrganisationRequest {
	export const type = isly.object<OrganisationRequest>({
		name: isly.string(),
		status: OrganisationStatus.type,
	})
	export const is = type.is
}
