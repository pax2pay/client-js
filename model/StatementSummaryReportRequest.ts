import * as isoly from "isoly"
import { ProviderCode } from "./ProviderCode"
export interface StatementSummaryReportRequest {
	providerCode: ProviderCode
	providerAccountId: string
	balanceType: "ACTUAL" | "AVAILABLE"
	dateRange?: {
		start?: isoly.Date
		end?: isoly.Date
	}
	period: "DAILY" | "WEEKLY" | "MONTHLY" | "QUARTERLY" | "YEARLY"
}
