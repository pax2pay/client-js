import { isly } from "isly"
import { DownloadFileFormat } from "../DownloadFileFormat"
import { ReportFileDestination } from "./ReportFileDestination"
import { ReportSubscriptionFrequencyRequest } from "./ReportSubscriptionFrequencyRequest"
import { ReportSubscriptionInvocationResponse } from "./ReportSubscriptionInvocationResponse"
import { ReportSubscriptionStatus } from "./ReportSubscriptionStatus"
import { ReportType } from "./ReportType"

export interface ReportSubscriptionResponse {
	id: string
	name: string
	reportType: ReportType
	fileFormat: DownloadFileFormat
	status: ReportSubscriptionStatus
	request: Record<string, any>
	frequency: ReportSubscriptionFrequencyRequest
	destination: ReportFileDestination
	lastInvocation?: ReportSubscriptionInvocationResponse
}

export namespace ReportSubscriptionResponse {
	export const type = isly.object<ReportSubscriptionResponse>({
		id: isly.string(),
		name: isly.string(),
		reportType: ReportType.type,
		fileFormat: DownloadFileFormat.type,
		status: ReportSubscriptionStatus.type,
		request: isly.record(isly.string(), isly.any()),
		frequency: isly.fromIs("ReportSubscriptionFrequencyRequest", ReportSubscriptionFrequencyRequest.is),
		destination: isly.fromIs("ReportFileDestination", ReportFileDestination.is),
		lastInvocation: ReportSubscriptionInvocationResponse.type.optional(),
	})
	export const is = type.is
}
