import { Currency } from "isoly"
import * as isoly from "isoly"
import { BookingInfo } from "./BookingInfo"
import { ProviderCode } from "./ProviderCode"
import { TransactionType } from "./TransactionType"
export interface CardTransaction {
	id: number
	providerTransactionId: string
	organisationCode: string
	organisationName: string
	transactionType: TransactionType
	provider: ProviderCode
	prvTimestamp: string
	associatedAccount: number
	issuedAmount: number
	issuedCurrency: Currency
	createdOn: string
	createdBy: string
	groupId?: number
	exchangeRate?: number
	description?: string
	bookingInfo?: BookingInfo
	friendlyName?: string
	expectedFundingTimestamp?: isoly.DateTime
}

export namespace CardTransaction {
	export function is(value: CardTransaction | any): value is CardTransaction {
		return (
			typeof value == "object" &&
			typeof value.id == "number" &&
			typeof value.providerTransactionId == "string" &&
			typeof value.organisationCode == "string" &&
			typeof value.organisationName == "string" &&
			TransactionType.is(value.transactionType) &&
			ProviderCode.is(value.provider) &&
			typeof value.prvTimestamp == "string" &&
			typeof value.associatedAccount == "number" &&
			typeof value.issuedAmount == "number" &&
			Currency.is(value.issuedCurrency) &&
			typeof value.createdOn == "string" &&
			typeof value.createdBy == "string" &&
			(value.groupId == undefined || typeof value.groupId == "number") &&
			(value.exchangeRate == undefined || typeof value.exchangeRate == "number") &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.bookingInfo == undefined || BookingInfo.is(value.bookingInfo)) &&
			(value.friendlyName == undefined || typeof value.friendlyName == "string") &&
			(value.expectedFundingTimestamp == undefined || isoly.DateTime.is(value.expectedFundingTimestamp))
		)
	}
}
