import * as isoly from "isoly"
import { ProviderCode } from "./ProviderCode"
import { BalanceType } from "./Report/BalanceType"
export interface StatementReportRequest {
	providerCode: ProviderCode
	providerAccountId: string
	dateRange?: {
		start: isoly.DateTime
		end: isoly.DateTime
	}
	balanceType?: BalanceType
	type?: "summary" | "full"
	subType?: "SETTLED" | "PENDING"
}
