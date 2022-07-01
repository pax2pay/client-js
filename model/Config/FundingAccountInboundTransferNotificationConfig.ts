/**
 * Config related to notifications for deposits made into funding accounts
 */
export interface FundingAccountInboundTransferNotificationConfig {
	enabled?: boolean
	emails?: string[]
}
