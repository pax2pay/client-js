export type StatementReportSubType = typeof StatementReportSubType.values[number]

export namespace StatementReportSubType {
	export const values = ["SETTLED", "PENDING", "PROGNOSIS", "FUTURE_PROGNOSIS", "UNUSED_CARDS_PROGNOSIS"] as const

	export function is(value: unknown): value is StatementReportSubType {
		return typeof value == "string" && values.includes(value as StatementReportSubType)
	}
}
