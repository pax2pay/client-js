import { isly } from "isly"
import { TierFeatureResponse } from "./TierFeatureResponse"
import { TierLimitResponse } from "./TierLimitResponse"

export interface TierResponse {
	id: string
	name: string
	description: string
	enabledFeatures: TierFeatureResponse[]
	limits: TierLimitResponse[]
}

export namespace TierResponse {
	export const type = isly.object<TierResponse>({
		id: isly.string(),
		name: isly.string(),
		description: isly.string(),
		enabledFeatures: TierFeatureResponse.type.array(),
		limits: TierLimitResponse.type.array(),
	})
	export const is = type.is
}
