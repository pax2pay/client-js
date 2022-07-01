import * as isoly from "isoly"
import { CardResponseV2 } from "../Card/CardResponseV2"
import { BookingInfoResponse } from "../Meta/BookingInfoResponse"
import { TransferResponse } from "../Transfer/TransferResponse"
import { BillingTransactionAmountPair } from "./BillingTransactionAmountPair"
import { StatementReportRowActionType } from "./StatementReportRowActionType"
import { StatementReportRowType } from "./StatementReportRowType"
import { StatementRowIds } from "./StatementRowIds"

export interface StatementReportResponseRow {
	actionType: StatementReportRowActionType
	amount: BillingTransactionAmountPair
	bookingInfo?: BookingInfoResponse
	postedDate: isoly.DateTime
	transactionDate?: isoly.DateTime
	actualBalance: number
	availableBalance: number
	rowType: StatementReportRowType
	ids: StatementRowIds
	card?: CardResponseV2
	transfer?: TransferResponse
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
			StatementRowIds.is(value.ids) &&
			(value.card == undefined || CardResponseV2.is(value.card)) &&
			(value.transfer == undefined || TransferResponse.is(value.transfer))
		)
	}
}
