import * as isoly from "isoly"
import { isly } from "isly"
import { DownloadFileFormat } from "./DownloadFileFormat"
import { Inclusion } from "./Inclusion"
import { ProviderCode } from "./ProviderCode"
import { StatementReportRowActionType } from "./StatementReportRowActionType"
import { TransferDirection } from "./TransferDirection"
export interface DownloadReconciliationReportRequest {
	fileFormat: DownloadFileFormat
	locale?: string
	providerCode?: ProviderCode
	providerAccountId?: string
	version?: "LEGACY" | "V2"
	dateRange?: isoly.DateRange
	providerTransactionTypes?: StatementReportRowActionType[]
	transferDirection?: TransferDirection
	rebateTransfers?: Inclusion
}

export namespace DownloadReconciliationReportRequest {
	export const type = isly.object<DownloadReconciliationReportRequest>({
		fileFormat: DownloadFileFormat.type,
		locale: isly.string().optional(),
		providerCode: ProviderCode.type.optional(),
		providerAccountId: isly.string().optional(),
		version: isly.string(["LEGACY", "V2"]).optional(),
		dateRange: isly.fromIs("DateRange", isoly.DateRange.is).optional(),
		providerTransactionTypes: isly
			.fromIs("StatementReportRowActionType", StatementReportRowActionType.is)
			.array()
			.optional(),
		transferDirection: isly.fromIs("TransferDirection", TransferDirection.is).optional(),
		rebateTransfers: Inclusion.type.optional(),
	})
	export const is = type.is
}
