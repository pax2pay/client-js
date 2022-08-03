/**
 * Config related to notifications for deposits made into funding accounts
 */
export interface FundingAccountInboundTransferNotificationConfig {
	enabled?: boolean
	emails?: string[]
}

export namespace FundingAccountInboundTransferNotificationConfig {
	export function is(
		value: FundingAccountInboundTransferNotificationConfig | any
	): value is FundingAccountInboundTransferNotificationConfig {
		return (
			typeof value == "object" &&
			(value.enabled == undefined || typeof value.enabled == "boolean") &&
			(value.emails == undefined ||
				(Array.isArray(value.emails) && value.emails.every((item: any) => typeof item == "string")))
		)
	}
}
