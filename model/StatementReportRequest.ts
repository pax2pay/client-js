import * as isoly from "isoly"
import { ProviderCode } from "./ProviderCode"

export interface StatementReportRequest {
	providerCode: ProviderCode
	providerAccountId: string
	dateRange?: {
		start: isoly.DateTime
		end: isoly.DateTime
	}
	balanceType?: "AVAILABLE" | "ACTUAL" | "STANDARD"
	type?: "summary" | "full"
	subType?: "SETTLED" | "PENDING"
}
