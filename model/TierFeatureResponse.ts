import { isly } from "isly"

export interface TierFeatureResponse {
	id: string
	name: string
	description: string
	category: string
}

export namespace TierFeatureResponse {
	export const type = isly.object<TierFeatureResponse>({
		id: isly.string(),
		name: isly.string(),
		description: isly.string(),
		category: isly.string(),
	})
	export const is = type.is
}
