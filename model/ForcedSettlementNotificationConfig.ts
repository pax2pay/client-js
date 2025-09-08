import { isly } from "isly"

export interface ForcedSettlementNotificationConfig {
	enabled: boolean
	usernames?: string[]
}
export namespace ForcedSettlementNotificationConfig {
	export const type = isly.object<ForcedSettlementNotificationConfig>({
		enabled: isly.boolean(),
		usernames: isly.string().array().optional(),
	})
	export const is = type.is
}
