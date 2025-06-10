import * as isoly from "isoly"
import { DownloadFileFormat } from "./DownloadFileFormat"
import { ProviderCode } from "./ProviderCode"
export interface DownloadReconciliationReportRequest {
	fileFormat: DownloadFileFormat
	locale?: string
	providerCode?: ProviderCode
	providerAccountId?: string
	version?: "LEGACY" | "V2"
	dateRange?: {
		start: isoly.Date
		end: isoly.Date
	}
}
