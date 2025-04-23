import { isly } from "isly"

export type StatementTransferSpecificType = typeof StatementTransferSpecificType.values[number]

export namespace StatementTransferSpecificType {
	export const values = [
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
	export const statementTransferSpecificType = values
	export const type = isly.string<StatementTransferSpecificType>(values)
	export const is = type.is
}
