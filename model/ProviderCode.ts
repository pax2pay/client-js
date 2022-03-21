const providerCodes = ["conferma", "ixaris", "wex", "fake", "lodged", "modulr", "unknown", "pax2pay"] as const
export type ProviderCode = typeof providerCodes[number]

export namespace ProviderCode {
	export function is(value: unknown): value is ProviderCode {
		return typeof value == "string" && providerCodes.includes(value as ProviderCode)
	}
}
