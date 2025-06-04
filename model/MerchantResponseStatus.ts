import { isly } from "isly"

export type MerchantResponseStatus = typeof MerchantResponseStatus.values[number]

export namespace MerchantResponseStatus {
	export const values = ["active", "deleted"] as const
	export const type = isly.string(values)
	export const is = type.is
}
