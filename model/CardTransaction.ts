import { Currency } from "isoly"
import * as isoly from "isoly"
import { BookingInfo } from "./BookingInfo"
import { ProviderCode } from "./ProviderCode"
import { TransactionType } from "./TransactionType"
export interface CardTransaction {
	id: number
	providerTransactionId: string
	transactionType: TransactionType
	provider: ProviderCode
	prvTimestamp: isoly.DateTime
	associatedAccount: number
	issuedAmount?: number
	issuedCurrency?: Currency
	createdOn: isoly.DateTime
	createdBy: string
	receivedAmount?: number
	receivedCurrency?: isoly.Currency
	updatedOn?: isoly.DateTime
	groupId?: number
	exchangeRate?: number
	description?: string
	bookingInfo?: BookingInfo
	friendlyName?: string
	expectedFundingTimestamp?: isoly.DateTime
}

//docs do not represent required fields correctly

export namespace CardTransaction {
	export function is(value: CardTransaction | any): value is CardTransaction {
		return (
			typeof value == "object" &&
			typeof value.id == "number" &&
			typeof value.providerTransactionId == "string" &&
			TransactionType.is(value.transactionType) &&
			ProviderCode.is(value.provider) &&
			isoly.DateTime.is(value.prvTimestamp) &&
			typeof value.associatedAccount == "number" &&
			(value.issuedAmount == undefined || typeof value.issuedAmount == "number") &&
			(value.issuedCurrency == undefined || Currency.is(value.issuedCurrency)) &&
			isoly.DateTime.is(value.createdOn) &&
			typeof value.createdBy == "string" &&
			(value.receivedAmount == undefined || typeof value.receivedAmount == "number") &&
			(value.receivedCurrency == undefined || isoly.Currency.is(value.receivedCurrency)) &&
			(value.updatedOn == undefined || isoly.DateTime.is(value.updatedOn)) &&
			(value.groupId == undefined || typeof value.groupId == "number") &&
			(value.exchangeRate == undefined || typeof value.exchangeRate == "number") &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.bookingInfo == undefined || BookingInfo.is(value.bookingInfo)) &&
			(value.friendlyName == undefined || typeof value.friendlyName == "string") &&
			(value.expectedFundingTimestamp == undefined || isoly.DateTime.is(value.expectedFundingTimestamp))
		)
	}
}
