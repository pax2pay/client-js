import * as isoly from "isoly"
import { ProviderCode } from "./ProviderCode"
import { BalanceType } from "./Report/BalanceType"

export interface StatementSummaryReportRequest {
	providerCode: ProviderCode
	providerAccountId: string
	balanceType?: BalanceType
	dateRange?: {
		start?: isoly.Date
		end?: isoly.Date
	}
	subType?: "SETTLED" | "PENDING"
	period: "DAILY" | "WEEKLY" | "MONTHLY" | "QUARTERLY" | "YEARLY"
}
