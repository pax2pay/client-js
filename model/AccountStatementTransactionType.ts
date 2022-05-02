const accountStatementTransactionType = [
	"AUTHORISATION",
	"AUTHORISATION_DECLINED",
	"SETTLEMENT",
	"AUTHORISATION_AND_SETTLEMENT",
	"REVERSAL",
	"REFUND",
	"TRANSFER_IN",
	"TRANSFER_OUT",
] as const
export type AccountStatementTransactionType = typeof accountStatementTransactionType[number]

export namespace AccountStatementTransactionType {
	export function is(value: unknown): value is AccountStatementTransactionType {
		return (
			typeof value == "string" && accountStatementTransactionType.includes(value as AccountStatementTransactionType)
		)
	}
}
