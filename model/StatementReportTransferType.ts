const statementReportTransferType = [
	"BACS",
	"CHAPS",
	"DIRECT_DEBIT",
	"FASTER_PAYMENTS",
	"SEPA",
	"SECT",
	"PROVIDER_INTERNAL",
	"SWIFT",
] as const
export type StatementReportTransferType = typeof statementReportTransferType[number]

export namespace StatementReportTransferType {
	export function is(value: unknown): value is StatementReportTransferType {
		return typeof value == "string" && statementReportTransferType.includes(value as StatementReportTransferType)
	}
}
