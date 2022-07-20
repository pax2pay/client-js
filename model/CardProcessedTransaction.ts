import * as isoly from "isoly"
import { ProviderCode } from "./ProviderCode"
import { TransactionStatus } from "./TransactionStatus"
import { TransactionType } from "./TransactionType"

export interface CardProcessedTransaction {
	timestamp: isoly.DateTime
	provider: ProviderCode
	description: string
	type: TransactionType
	reference?: string
	status?: TransactionStatus
	balance?: number
	fundsChanged?: number
	currency?: isoly.Currency
	reason?: string
	additionalInformation?: {
		orderId?: string
	}
}
