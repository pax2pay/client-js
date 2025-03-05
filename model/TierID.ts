import { isly } from "isly"

export type TierID = typeof TierID.types[number]

export namespace TierID {
	export const types = ["tier1", "tier2", "tier3", "legacy"] as const
	export const type = isly.string(types)
	export const is = type.is
}
