import { isly } from "isly"
export interface TierLimitResponse {
	id: string
	name: string
	description: string
	category: string
	limit: number
}

export namespace TierLimitResponse {
	export const type = isly.object<TierLimitResponse>({
		id: isly.string(),
		name: isly.string(),
		description: isly.string(),
		category: isly.string(),
		limit: isly.number(),
	})
	export const is = type.is
}
