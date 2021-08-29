import * as isoly from "isoly"
import { Status } from "./Status"
import { TransactionType } from "./TransactionType"

/**
 * An item in the reconciliation report
 */
export interface ReconciliationItem {
	transactionDate: isoly.Date
	organisation: string
	cardId?: string
	transactionType: TransactionType
	status: Status
	sourceAccount: string
	sourceAccountIban?: string
	cardNumber?: string
	cardType?: string
	usedAs?: string
	billingCurrency: isoly.Currency
	billingAmount: number
	transactionCurrency: isoly.Currency
	transactionAmount: number
	exchangeRate: number
	trackingId?: string
	departureDate?: isoly.Date
	supplierCode?: string
	supplierBookingRef?: string
	leadPassengerName?: string
	agentBookingRef?: string
	createdBy?: string
	transactionId?: string
	orderId?: string
	merchantCategoryCode?: string
	merchantName?: string
	merchantCountry?: string
	sourceAccountSortCode?: string
	sourceAccountAccountNumber?: string
	reason?: string
}
