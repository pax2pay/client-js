const transactionType = [
	"CREATE_CARD",
	"AUTHORISATION",
	"SETTLEMENT",
	"REVERSAL",
	"DEPOSIT",
	"FUND_CARD",
	"PURCHASE",
	"REFUND",
	"SWEEP",
	"CLOSE",
	"FREEZE",
	"THAW",
	"APPROVAL_PENDING",
	"EXPIRE",
	"UNKNOWN",
] as const

export type TransactionType = typeof transactionType[number]

export namespace TransactionType {
	export function is(value: TransactionType | any): value is TransactionType {
		return typeof value == "string" && transactionType.includes(value as TransactionType)
	}
}
