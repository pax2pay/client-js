export type StatementReportRowType = "SUMMARY" | "FULL"

export namespace StatementReportRowType {
	export function is(value: StatementReportRowType | any): value is StatementReportRowType {
		return value == "SUMMARY" || value == "FULL"
	}
}
