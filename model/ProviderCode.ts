import { isly } from "isly"

export type ProviderCode = typeof ProviderCode.types[number]

export namespace ProviderCode {
	export const types = ["conferma", "ixaris", "wex", "fake", "lodged", "modulr", "unknown", "pax2pay"] as const
	export const type = isly.string(types)
	export const is = type.is
}
