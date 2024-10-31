import { isly } from "isly"
import { OrganisationStatusV2 } from "./OrganisationStatusV2"

export type OrganisationStatus = typeof OrganisationStatus.values[number]

export namespace OrganisationStatus {
	export const values = ["ACTIVE", "INACTIVE", "DELETED"] as const
	export const type = isly.string<OrganisationStatus>(values)
	export const is = type.is
	export function toOrganisationStatusV2(value: OrganisationStatus): OrganisationStatusV2 {
		return value.toLowerCase() as OrganisationStatusV2
	}
}
