import { AmountPair as ReportAmountPair } from "./AmountPair"
import { BillingTransactionAmountPair as ReportBillingTransactionAmountPair } from "./BillingTransactionAmountPair"
import { ChargeBackItem as ReportChargeBackItem } from "./ChargeBackItem"
import { Statement as ReportStatement } from "./Legacy/Statement"
import { StatementItem as ReportStatementItem } from "./Legacy/StatementItem"
import { StatementType as ReportStatementType } from "./Legacy/StatementType"
import { ProcessedStatement as ReportProcessedStatement } from "./ProcessedStatement"
import { Reconciliation as ReportReconciliation } from "./Reconciliation"
import { ReconciliationItem as ReportReconciliationItem } from "./ReconciliationItem"
import { StatementReportRequest as ReportStatementReportRequest } from "./StatementReportRequest"
import { StatementReportResponse as ReportStatementReportResponse } from "./StatementReportResponse"
import { StatementReportResponseRow as ReportStatementReportResponseRow } from "./StatementReportResponseRow"
import { StatementReportRowActionType as ReportStatementReportRowActionType } from "./StatementReportRowActionType"
import { StatementReportRowType as ReportStatementReportRowType } from "./StatementReportRowType"
import { StatementRowIds as ReportStatementRowIds } from "./StatementRowIds"
import { Status as ReportItemStatus } from "./Status"
import { TransactionType as ReportTransactionType } from "./TransactionType"
export interface Report<T> {
	report: T
}

export namespace Report {
	export type AmountPair = ReportAmountPair
	export type BillingTransactionAmountPair = ReportBillingTransactionAmountPair
	export type ChargeBackItem = ReportChargeBackItem
	export type ProcessedStatement = ReportProcessedStatement
	export type Reconciliation = Report<ReportReconciliation>
	export type ReconciliationItem = ReportReconciliationItem
	export type LegacyStatement = Report<ReportStatement>
	export type LegacyStatementItem = ReportStatementItem
	export type LegacyStatementType = ReportStatementType
	export type ItemStatus = ReportItemStatus
	export type TransactionType = ReportTransactionType
	export type StatementReportRequest = ReportStatementReportRequest
	export type StatementReportResponse = ReportStatementReportResponse
	export type StatementReportResponseRow = ReportStatementReportResponseRow
	export type StatementReportRowActionType = ReportStatementReportRowActionType
	export type StatementReportRowType = ReportStatementReportRowType
	export type StatementRowIds = ReportStatementRowIds
}
