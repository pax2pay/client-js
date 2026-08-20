import { isly } from "isly"

export type PaymentScheduleResponseStatus = (typeof PaymentScheduleResponseStatus.values)[number]

export namespace PaymentScheduleResponseStatus {
	export const values = [
		"upcoming",
		"pending",
		"approved",
		"processing",
		"halted",
		"sent",
		"executed",
		"declined",
		"failed",
		"rejected",
		"cancelled",
	] as const
	export const type = isly.string(values)
	export const is = type.is
}
