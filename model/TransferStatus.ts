import { isly } from "isly"

export type TransferStatus = typeof TransferStatus.values[number]

export namespace TransferStatus {
	export const values = [
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
	export const type = isly.string(values)
	export const is = type.is
}
