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
