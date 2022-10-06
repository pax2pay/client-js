const transactionType = [
	"CREATE_CARD",
	"FUND_CARD",
	"SCHEDULED_LIMIT_CHANGE",
	"LIMIT_CHANGE",
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
