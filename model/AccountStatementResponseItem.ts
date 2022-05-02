import * as isoly from "isoly"
import { AccountStatementTransactionType } from "./AccountStatementTransactionType"
import { MinimalBookingInfo } from "./MinimalBookingInfo"
import { ProviderCode } from "./ProviderCode"

export interface AccountStatementResponseItem {
	transactionType: AccountStatementTransactionType
	amount: BillingTransactionAmountPair
	bookingInfo: MinimalBookingInfo
	timestamp: isoly.DateTime
	actualBalance: number
	availableBalance: number
	rowType: StatementReportRowType
	ids: StatementRowIds
}

export interface BillingTransactionAmountPair {
	billing: AmountPair
	transaction: AmountPair
	fxRate: number
}

export interface AmountPair {
	amount: number
	currency: isoly.Currency
}

export type StatementReportRowType = "FULL" | "SUMMARY"

export interface StatementRowIds {
	rowId: string
	providerCode: ProviderCode
	providerCardId: string
}
