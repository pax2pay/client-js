const transferStatus = [
	"CREATED",
	"DEPOSITED",
	"EXPIRED",
	"UNKNOWN",
	"WITHDRAWN",
	"PENDING",
	"PENDING_FOR_DATE",
	"PENDING_FOR_FUNDS",
	"SETTLED",
	"CANCELLED",
	"ERROR_REJECTED",
	"APPROVAL_PENDING",
	"DECLINED",
	"APPROVED",
	"GENERATED",
] as const

export type TransferStatus = typeof transferStatus[number]

export namespace TransferStatus {
	export function is(value: unknown): value is TransferStatus {
		return typeof value == "string" && transferStatus.includes(value as TransferStatus)
	}
}
