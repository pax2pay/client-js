import * as isoly from "isoly"
import { BillingTransactionAmountPair } from "./BillingTransactionAmountPair"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { CardResponseV2 } from "./CardResponseV2"
import { StatementReportRowActionType } from "./StatementReportRowActionType"
import { StatementReportRowType } from "./StatementReportRowType"
import { StatementRowIds } from "./StatementRowIds"
import { TransferResponse } from "./TransferResponse"

export interface StatementReportResponseRow {
	actionType: StatementReportRowActionType
	amount: BillingTransactionAmountPair
	bookingInfo: BookingInfoResponse
	postedDate: isoly.DateTime
	transactionDate: isoly.DateTime
	actualBalance: number
	availableBalance: number
	rowType: StatementReportRowType
	ids: StatementRowIds
	card?: CardResponseV2
	transfer?: TransferResponse
}
