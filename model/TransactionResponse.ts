import * as isoly from "isoly"
import { BookingInfo } from "./Meta/BookingInfo"
import { TransactionType } from "./TransactionType"

export interface TransactionResponse {
	id: number
	providerTransactionId: string
	organisationCode: string
	organisationName: string
	transactionType: TransactionType
	provider: string
	prvTimestamp: string
	associatedAccount: number
	issuedAmount: number
	issuedCurrency: isoly.Currency
	receivedAmount: number
	receivedCurrency: isoly.Currency
	exchangeRate?: number
	description?: string
	createdOn: string
	createdBy: string
	updatedOn: string
	groupId?: number
	bookingInfo?: BookingInfo
	friendlyName?: string
	expectedFundingTimestamp?: string
}
