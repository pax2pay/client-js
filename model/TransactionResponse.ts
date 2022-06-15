import { Meta } from "./Meta"
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
	issuedCurrency: string
	receivedAmount: number
	receivedCurrency: string
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
