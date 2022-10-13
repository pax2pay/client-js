const statementTransferSpecificType = [
	"BACS",
	"CHAPS",
	"DIRECT_DEBIT",
	"FASTER_PAYMENTS",
	"SEPA",
	"SECT",
	"PROVIDER_INTERNAL",
	"SWIFT",
	"REV",
] as const
export type StatementTransferSpecificType = typeof statementTransferSpecificType[number]

export namespace StatementTransferSpecificType {
	export function is(value: unknown): value is StatementTransferSpecificType {
		return typeof value == "string" && statementTransferSpecificType.includes(value as StatementTransferSpecificType)
	}
}
