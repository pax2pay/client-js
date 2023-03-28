import * as isoly from "isoly"
import { ProviderCode } from "./ProviderCode"
export interface ReconciliationReportUrlRequest {
	fileFormat: string
	locale?: string
	providerCode: ProviderCode
	providerAccountId?: string
	dateRange?: {
		start: isoly.Date
		end: isoly.Date
	}
}
