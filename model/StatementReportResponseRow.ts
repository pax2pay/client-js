import * as isoly from "isoly"
import { isly } from "isly"
import { BillingTransactionAmountPair } from "./BillingTransactionAmountPair"
import { CardResponseV2 } from "./CardResponseV2"
import { CardResponseV2Summary } from "./CardResponseV2Summary"
import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
import { FutureTransactionPrognosisAmountPair } from "./FutureTransactionPrognosisAmountPair"
import { MetadataResponse } from "./MetadataResponse"
import { PaymentResponse } from "./PaymentResponse"
import { StatementReportRowActionType } from "./StatementReportRowActionType"
import { StatementReportRowType } from "./StatementReportRowType"
import { StatementRowIds } from "./StatementRowIds"
import { StatementTransferSpecificType } from "./StatementTransferSpecificType"
import { TransferResponseV2 } from "./TransferResponseV2"
import { TransferResponseV2Summary } from "./TransferResponseV2Summary"

export interface StatementReportResponseRow {
	actionType: StatementReportRowActionType
	amount: BillingTransactionAmountPair | FutureTransactionPrognosisAmountPair
	bookingInfo?: MetadataResponse
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
	payment?: PaymentResponse
}

export namespace StatementReportResponseRow {
	export const type = isly.object<StatementReportResponseRow>({
		actionType: isly.fromIs("StatementReportRowActionType", StatementReportRowActionType.is),
		amount: isly.union(
			BillingTransactionAmountPair.type,
			isly.fromIs("FutureTransactionPrognosisAmountPair", FutureTransactionPrognosisAmountPair.is)
		),
		bookingInfo: MetadataResponse.type.optional(),
		postedDate: isly.fromIs("DateTime", isoly.DateTime.is).optional(),
		transactionDate: isly.fromIs("DateTime", isoly.DateTime.is).optional(),
		balance: isly.number().optional(),
		actualBalance: isly.number().optional(),
		availableBalance: isly.number().optional(),
		rowType: isly.fromIs("StatementReportRowType", StatementReportRowType.is),
		transferType: isly.fromIs("StatementTransferSpecificType", StatementTransferSpecificType.is).optional(),
		ids: isly.fromIs("StatementRowIds", StatementRowIds.is),
		card: isly.union(CardResponseV2.type, isly.fromIs("CardResponseV2Summary", CardResponseV2Summary.is)).optional(),
		scheduledTask: isly.fromIs("CardScheduleResponseItem", CardScheduleResponseItem.is).optional(),
		transfer: isly
			.union(TransferResponseV2.type, isly.fromIs("TransferResponseV2Summary", TransferResponseV2Summary.is))
			.optional(),
		payment: PaymentResponse.type.optional(),
	})
	export const is = type.is
}
