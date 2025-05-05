import { isly } from "isly"

export type StatementReportRowType = typeof StatementReportRowType.values[number]

export namespace StatementReportRowType {
	export const values = ["summary", "full"] as const
	export const type = isly.string<StatementReportRowType>(values)
	export const is = type.is
}
