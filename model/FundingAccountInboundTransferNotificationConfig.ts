import { isly } from "isly"

/**
 * Config related to notifications for deposits made into funding accounts
 */
export interface FundingAccountInboundTransferNotificationConfig {
	enabled?: boolean
	emails?: string[]
}
export namespace FundingAccountInboundTransferNotificationConfig {
	export const type = isly.object<FundingAccountInboundTransferNotificationConfig>({
		enabled: isly.boolean().optional(),
		emails: isly.string().array().optional(),
	})
	export const is = type.is
}
