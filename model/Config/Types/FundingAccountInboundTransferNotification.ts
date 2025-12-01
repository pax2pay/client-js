import { isly } from "isly"

/**
 * Config related to notifications for deposits made into funding accounts
 */
export interface FundingAccountInboundTransferNotification {
	enabled?: boolean
	emails?: string[]
}
export namespace FundingAccountInboundTransferNotification {
	export const type = isly.object<FundingAccountInboundTransferNotification>({
		enabled: isly.boolean().optional(),
		emails: isly.string().array().optional(),
	})
	export const is = type.is
}
