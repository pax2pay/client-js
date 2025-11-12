import { isly } from "isly"
import { DestinationType } from "../DestinationType"
import { EmailReportFileDestination } from "../EmailReportFileDestination"
import { SftpReportFileDestination } from "../SftpReportFileDestination"

export type ReportFileDestination = (EmailReportFileDestination | SftpReportFileDestination) & {
	destinationType: DestinationType
}

export namespace ReportFileDestination {
	export type Type = {
		destinationType: DestinationType
	}
	export const type = isly.intersection<
		ReportFileDestination,
		Type,
		EmailReportFileDestination | SftpReportFileDestination
	>(
		isly.object<Type>({ destinationType: DestinationType.type }),
		isly.union(EmailReportFileDestination.type, SftpReportFileDestination.type)
	)
	export const is = type.is
}
