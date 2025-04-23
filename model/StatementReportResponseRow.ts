import * as isoly from "isoly"
import { isly } from "isly"
import { BillingTransactionAmountPair } from "./BillingTransactionAmountPair"
import { CardResponseV2 } from "./CardResponseV2"
import { CardResponseV2Summary } from "./CardResponseV2Summary"
import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
import { FutureTransactionPrognosisAmountPair } from "./FutureTransactionPrognosisAmountPair"
import { MetadataResponse } from "./MetadataResponse"
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
}

export namespace StatementReportResponseRow {
	export const type = isly.object<StatementReportResponseRow>({
		actionType: StatementReportRowActionType.type,
		amount: BillingTransactionAmountPair.type,
		bookingInfo: MetadataResponse.type.optional(),
		postedDate: isly.fromIs("DateTime", isoly.DateTime.is).optional(),
		transactionDate: isly.fromIs("DateTime", isoly.DateTime.is).optional(),
		balance: isly.number().optional(),
		actualBalance: isly.number().optional(),
		availableBalance: isly.number().optional(),
		rowType: StatementReportRowType.type,
		transferType: StatementTransferSpecificType.type.optional(),
		ids: StatementRowIds.type,
		card: isly.union(CardResponseV2.type, CardResponseV2Summary.type).optional(),
		scheduledTask: CardScheduleResponseItem.type.optional(),
		transfer: isly.union(TransferResponseV2.type, TransferResponseV2Summary.type).optional(),
	})
	export const is = type.is
}
