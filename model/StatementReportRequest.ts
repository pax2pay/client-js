import * as isoly from "isoly"
import { ProviderCode } from "./ProviderCode"

export interface StatementReportRequest {
	providerCode: ProviderCode
	providerAccountId: string
	period: {
		start: isoly.DateTime
		end: isoly.DateTime
	}
}
