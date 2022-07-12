const transactionStatus = [
	"APPROVAL",
	"CREATED",
	"DECLINED",
	"DEPOSITED",
	"EXPIRED",
	"SETTLED",
	"UNKNOWN",
	"WITHDRAWN",
] as const

export type TransactionStatus = typeof transactionStatus[number]

export namespace TransactionStatus {
	export function is(value: unknown): value is TransactionStatus {
		return typeof value == "string" && transactionStatus.includes(value as TransactionStatus)
	}
}
