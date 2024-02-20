export const statementReportSubType = ["SETTLED", "PENDING", "PROGNOSIS"] as const

export type StatementReportSubType = typeof statementReportSubType[number]

export namespace StatementReportSubType {
	export function is(value: unknown): value is StatementReportSubType {
		return typeof value == "string" && statementReportSubType.includes(value as StatementReportSubType)
	}
}
