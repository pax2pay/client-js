import * as isoly from "isoly"
import { BillingTransactionAmountPair } from "./BillingTransactionAmountPair"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { CardResponseV2 } from "./CardResponseV2"
import { StatementReportRowActionType } from "./StatementReportRowActionType"
import { StatementReportRowType } from "./StatementReportRowType"
import { StatementRowIds } from "./StatementRowIds"
import { StatementTransferSpecificType } from "./StatementTransferSpecificType"
import { TransferResponseV2 } from "./TransferResponseV2"

export interface StatementReportResponseRow {
	actionType: StatementReportRowActionType
	amount: BillingTransactionAmountPair
	bookingInfo?: BookingInfoResponse
	postedDate: isoly.DateTime
	transactionDate?: isoly.DateTime
	actualBalance: number
	availableBalance: number
	rowType: StatementReportRowType
	transferType?: StatementTransferSpecificType
	ids: StatementRowIds
	card?: CardResponseV2
	transfer?: TransferResponseV2
}

export namespace StatementReportResponseRow {
	export function is(value: StatementReportResponseRow | any): value is StatementReportResponseRow {
		return (
			typeof value == "object" &&
			StatementReportRowActionType.is(value.actionType) &&
			BillingTransactionAmountPair.is(value.amount) &&
			(value.bookingInfo == undefined || BookingInfoResponse.is(value.bookingInfo)) &&
			isoly.DateTime.is(value.postedDate) &&
			(value.transactionDate == undefined || isoly.DateTime.is(value.transactionDate)) &&
			typeof value.actualBalance == "number" &&
			typeof value.availableBalance == "number" &&
			StatementReportRowType.is(value.rowType) &&
			(value.transferType == undefined || StatementTransferSpecificType.is(value.transferType)) &&
			StatementRowIds.is(value.ids) &&
			(value.card == undefined || CardResponseV2.is(value.card)) &&
			(value.transfer == undefined || TransferResponseV2.is(value.transfer))
		)
	}
}
