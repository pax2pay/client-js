import { isly } from "isly"
import { DownloadFileFormat } from "./DownloadFileFormat"

export interface DownloadMerchantBookingReportRequest {
	fileFormat: DownloadFileFormat
	locale?: string
	allOrganisations?: boolean
}

export namespace DownloadMerchantBookingReportRequest {
	export const type = isly.object<DownloadMerchantBookingReportRequest>({
		fileFormat: DownloadFileFormat.type,
		locale: isly.string().optional(),
		allOrganisations: isly.boolean().optional(),
	})
	export const is = type.is
}
