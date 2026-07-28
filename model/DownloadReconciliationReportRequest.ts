import * as isoly from "isoly"
import { isly } from "isly"
import { DownloadFileFormat } from "./DownloadFileFormat"
import { ProviderCode } from "./ProviderCode"
import { ProviderTransactionSubType } from "./ProviderTransactionSubType"
import { TransferDirection } from "./TransferDirection"
export interface DownloadReconciliationReportRequest {
	fileFormat: DownloadFileFormat
	locale?: string
	providerCode?: ProviderCode
	providerAccountId?: string
	version?: "LEGACY" | "V2"
	dateRange?: isoly.DateRange
	providerTransactionTypes?: ProviderTransactionSubType[]
	transferDirection?: TransferDirection
}

export namespace DownloadReconciliationReportRequest {
	export const type = isly.object<DownloadReconciliationReportRequest>({
		fileFormat: DownloadFileFormat.type,
		locale: isly.string().optional(),
		providerCode: ProviderCode.type.optional(),
		providerAccountId: isly.string().optional(),
		version: isly.string(["LEGACY", "V2"]).optional(),
		dateRange: isly.fromIs("DateRange", isoly.DateRange.is).optional(),
		providerTransactionTypes: ProviderTransactionSubType.type.array().optional(),
		transferDirection: isly.fromIs("TransferDirection", TransferDirection.is).optional(),
	})
	export const is = type.is
}
