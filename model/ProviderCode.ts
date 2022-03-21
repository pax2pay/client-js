export type ProviderCode = "conferma" | "ixaris" | "wex" | "fake" | "lodged" | "modulr" | "unknown" | "pax2pay"

export namespace ProviderCode {
	export function is(value: ProviderCode | any): value is ProviderCode {
		return (
			value == "conferma" ||
			value == "ixaris" ||
			value == "wex" ||
			value == "fake" ||
			value == "lodged" ||
			value == "modulr" ||
			value == "unknown" ||
			value == "pax2pay"
		)
	}
}
