import * as isoly from "isoly"
import { ProviderCode } from "./ProviderCode"
import { BalanceType } from "./Report/BalanceType"
import { StatementReportSubType } from "./StatementReportSubType"

export interface StatementSummaryReportRequest {
	providerCode: ProviderCode
	providerAccountId: string
	balanceType?: BalanceType
	dateRange?: {
		start?: isoly.Date
		end?: isoly.Date
	}
	subType?: StatementReportSubType
	period: "DAILY" | "WEEKLY" | "MONTHLY" | "QUARTERLY" | "YEARLY" | "ENTIRE"
}
