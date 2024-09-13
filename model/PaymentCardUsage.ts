import { isly } from "isly"

export type PaymentCardUsage = "single" | "multiple" | "single allow test auth"

export namespace PaymentCardUsage {
	export const type = isly.string(["single", "multiple", "single allow test auth"])
	export const is = type.is
}
