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

export namespace CardProcessedTransaction {
	export function is(value: CardProcessedTransaction | any): value is CardProcessedTransaction {
		return (
			typeof value == "object" &&
			isoly.DateTime.is(value.timestamp) &&
			ProviderCode.is(value.provider) &&
			typeof value.description == "string" &&
			TransactionType.is(value.type) &&
			(value.reference == undefined || typeof value.reference == "string") &&
			(value.status == undefined || TransactionStatus.is(value.status)) &&
			(value.balance == undefined || typeof value.balance == "number") &&
			(value.fundsChanged == undefined || typeof value.fundsChanged == "number") &&
			(value.currency == undefined || isoly.Currency.is(value.currency)) &&
			(value.reason == undefined || typeof value.reason == "string") &&
			(value.additionalInformation == undefined ||
				(typeof value.additionalInformation == "object" &&
					(value.orderId == undefined || typeof value.orderId == "string")))
		)
	}
}
