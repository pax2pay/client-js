import { isly } from "isly"

export interface ForcedSettlementNotification {
	enabled: boolean
	usernames?: string[]
}
export namespace ForcedSettlementNotification {
	export const type = isly.object<ForcedSettlementNotification>({
		enabled: isly.boolean(),
		usernames: isly.string().array().optional(),
	})
	export const is = type.is
}
