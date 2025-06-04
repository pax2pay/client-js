import { isly } from "isly"

export type MerchantResponseStatus = typeof MerchantResponseStatus.types[number]

export namespace MerchantResponseStatus {
	export const types = ["active", "deleted"] as const
	export const type = isly.string(types)
	export const is = type.is
}
