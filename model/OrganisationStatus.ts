import { isly } from "isly"

export type OrganisationStatus = typeof OrganisationStatus.values[number]

export namespace OrganisationStatus {
	export const values = ["ACTIVE", "INACTIVE", "DELETED"] as const
	export const type = isly.string<OrganisationStatus>(values)
	export const is = type.is
}
