import * as isoly from "isoly"
import { Inclusion } from "./Inclusion"
import { ProviderCode } from "./ProviderCode"
import { BalanceType } from "./Report/BalanceType"
import { StatementReportRowActionType } from "./StatementReportRowActionType"
import { StatementReportSubType } from "./StatementReportSubType"

export interface StatementSummaryReportRequest {
	providerCode: ProviderCode
	providerAccountId: string
	balanceType?: BalanceType
	actionTypes?: StatementReportRowActionType[]
	dateRange?: {
		start?: isoly.Date
		end?: isoly.Date
	}
	subType?: StatementReportSubType
	period: "DAILY" | "WEEKLY" | "MONTHLY" | "QUARTERLY" | "YEARLY" | "ENTIRE"
	rebateTransfers?: Inclusion
}
