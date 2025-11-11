import { isly } from "isly"

export type ReportType = typeof ReportType.values[number]
export namespace ReportType {
	export const values = ["RECONCILIATION", "STATEMENT"] as const
	export const type = isly.string<ReportType>(values)
	export const is = type.is
}
