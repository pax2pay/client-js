import { BalanceType as ReportBalanceType } from "./BalanceType"
import { Reconciliation as ReportReconciliation } from "./Reconciliation"
import { ReconciliationItem as ReportReconciliationItem } from "./ReconciliationItem"
import { Statement as ReportStatement } from "./Statement"
import { StatementItem as ReportStatementItem } from "./StatementItem"
import { StatementType as ReportStatementType } from "./StatementType"
import { Status as ReportItemStatus } from "./Status"
import { TransactionType as ReportTransactionType } from "./TransactionType"
export interface Report<T> {
	report: T
}

export namespace Report {
	export type Reconciliation = Report<ReportReconciliation>
	export type ReconciliationItem = ReportReconciliationItem
	export type Statement = Report<ReportStatement>
	export type StatementItem = ReportStatementItem
	export type StatementType = ReportStatementType
	export type ItemStatus = ReportItemStatus
	export type TransactionType = ReportTransactionType
	export type BalanceType = ReportBalanceType
}
