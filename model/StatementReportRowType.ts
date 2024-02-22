export type StatementReportRowType = "summary" | "full"

export namespace StatementReportRowType {
	export function is(value: StatementReportRowType | any): value is StatementReportRowType {
		return value == "summary" || value == "full"
	}
}
