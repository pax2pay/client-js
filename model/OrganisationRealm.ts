import { isly } from "isly"

export type OrganisationRealm = typeof OrganisationRealm.values[number]

export namespace OrganisationRealm {
	export const values = ["uk", "eu"] as const
	export const type = isly.string<OrganisationRealm>(values)
	export const is = type.is
}
