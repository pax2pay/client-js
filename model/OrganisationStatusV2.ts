import { isly } from "isly"

export type OrganisationStatusV2 = typeof OrganisationStatusV2.values[number]

export namespace OrganisationStatusV2 {
	export const values = ["active", "inactive", "deleted"] as const
	export const type = isly.string<OrganisationStatusV2>(values)
	export const is = type.is
}
