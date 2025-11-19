import { isly } from "isly"

export interface EmailReportFileDestination {
	to: string[]
	subject?: string
	body?: string
}
export namespace EmailReportFileDestination {
	export const type = isly.object<EmailReportFileDestination>({
		to: isly.string(/\S+@\S+\.\S+/).array(),
		subject: isly.string().optional(),
		body: isly.string().optional(),
	})
	export const is = type.is
}
