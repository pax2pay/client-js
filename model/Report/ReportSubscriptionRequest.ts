import { isly } from "isly"
import { DestinationType } from "../DestinationType"
import { DownloadFileFormat } from "../DownloadFileFormat"
import { ReportSubscriptionFrequencyRequest } from "./ReportSubscriptionFrequencyRequest"
import { ReportType } from "./ReportType"
export interface ReportSubscriptionRequest {
	name?: string
	reportType: ReportType
	fileFormat: DownloadFileFormat
	request?: Record<string, any>
	frequency: ReportSubscriptionFrequencyRequest
	destination: DestinationType
}
export namespace ReportSubscriptionRequest {
	export const type = isly.object<ReportSubscriptionRequest>({
		name: isly.string().optional(),
		reportType: ReportType.type,
		fileFormat: DownloadFileFormat.type,
		request: isly.record(isly.string(), isly.any()).optional(),
		frequency: isly.fromIs("ReportSubscriptionFrequencyRequest", ReportSubscriptionFrequencyRequest.is),
		destination: DestinationType.type,
	})
	export const is = type.is
}
