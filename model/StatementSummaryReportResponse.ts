import * as isoly from "isoly"
import { ProviderCode } from "./ProviderCode"
import { StatementSummaryReportResponseRow } from "./StatementSummaryReportResponseRow"

export interface StatementSummaryReportResponse {
	providerCode: ProviderCode
	providerAccountId: string
	currency: isoly.Currency
	balanceType?: "AVAILABLE" | "ACTUAL" | "STANDARD"
	inaccurateBalance?: boolean
	summaries: StatementSummaryReportResponseRow[]
}
