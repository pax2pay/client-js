import { isly } from "isly"
import { DownloadFileFormat } from "../DownloadFileFormat"
import { ReportFileDestination } from "./ReportFileDestination"
import { ReportSubscriptionFrequencyRequest } from "./ReportSubscriptionFrequencyRequest"
import { ReportType } from "./ReportType"
export interface ReportSubscriptionRequest {
	name?: string
	reportType: ReportType
	fileFormat: DownloadFileFormat
	request?: Record<string, any>
	frequency: ReportSubscriptionFrequencyRequest
	destination: ReportFileDestination
}
export namespace ReportSubscriptionRequest {
	export const type = isly.object<ReportSubscriptionRequest>({
		name: isly.string().optional(),
		reportType: ReportType.type,
		fileFormat: DownloadFileFormat.type,
		request: isly.record(isly.string(), isly.any()).optional(),
		frequency: isly.fromIs("ReportSubscriptionFrequencyRequest", ReportSubscriptionFrequencyRequest.is),
		destination: isly.fromIs("ReportFileDestination", ReportFileDestination.is),
	})
	export const is = type.is
}
