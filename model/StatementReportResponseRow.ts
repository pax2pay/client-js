import * as isoly from "isoly"
import { BillingTransactionAmountPair } from "./BillingTransactionAmountPair"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { CardResponseV2 } from "./CardResponseV2"
import { CardResponseV2Summary } from "./CardResponseV2Summary"
import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
import { FutureTransactionPrognosisAmountPair } from "./FutureTransactionPrognosisAmountPair"
import { StatementReportRowActionType } from "./StatementReportRowActionType"
import { StatementReportRowType } from "./StatementReportRowType"
import { StatementRowIds } from "./StatementRowIds"
import { StatementTransferSpecificType } from "./StatementTransferSpecificType"
import { TransferResponseV2 } from "./TransferResponseV2"
import { TransferResponseV2Summary } from "./TransferResponseV2Summary"

export interface StatementReportResponseRow {
	actionType: StatementReportRowActionType
	amount: BillingTransactionAmountPair | FutureTransactionPrognosisAmountPair
	bookingInfo?: BookingInfoResponse
	postedDate?: isoly.DateTime
	transactionDate?: isoly.DateTime
	balance?: number
	actualBalance?: number
	availableBalance?: number
	rowType: StatementReportRowType
	transferType?: StatementTransferSpecificType
	ids: StatementRowIds
	card?: CardResponseV2 | CardResponseV2Summary
	scheduledTask?: CardScheduleResponseItem
	transfer?: TransferResponseV2 | TransferResponseV2Summary
}

export namespace StatementReportResponseRow {
	export function is(value: StatementReportResponseRow | any): value is StatementReportResponseRow {
		return (
			typeof value == "object" &&
			StatementReportRowActionType.is(value.actionType) &&
			BillingTransactionAmountPair.is(value.amount) &&
			(value.bookingInfo == undefined || BookingInfoResponse.is(value.bookingInfo)) &&
			(value.postedDate == undefined || isoly.DateTime.is(value.postedDate)) &&
			(value.transactionDate == undefined || isoly.DateTime.is(value.transactionDate)) &&
			(typeof value.balance == "number" || value.balance == undefined) &&
			(typeof value.actualBalance == "number" || value.actualBalance == undefined) &&
			(typeof value.availableBalance == "number" || value.availableBalance == undefined) &&
			StatementReportRowType.is(value.rowType) &&
			(value.transferType == undefined || StatementTransferSpecificType.is(value.transferType)) &&
			StatementRowIds.is(value.ids) &&
			(value.card == undefined || CardResponseV2.is(value.card) || CardResponseV2Summary.is(value.card)) &&
			(value.transfer == undefined ||
				TransferResponseV2.is(value.transfer) ||
				TransferResponseV2Summary.is(value.transfer))
		)
	}
}
