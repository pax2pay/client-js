import { isly } from "isly"

export interface SftpReportFileDestination {
	host: string
	user: string
	port?: number
	password?: string
	privateKey?: string
	fingerPrint?: string
	path: string
}
export namespace SftpReportFileDestination {
	export const type = isly.object<SftpReportFileDestination>({
		host: isly.string(),
		user: isly.string(),
		port: isly.number("integer").optional(),
		password: isly.string().optional(),
		privateKey: isly.string().optional(),
		fingerPrint: isly.string().optional(),
		path: isly.string(),
	})
	export const is = type.is
}
