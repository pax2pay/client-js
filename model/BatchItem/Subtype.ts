export type Subtype = "visa-b2b-vcn-travel" | "visa-business-prepaid" | "visa-corporate-debit"

export namespace Subtype {
	export function is(value: Subtype | any): value is Subtype {
		return value == "visa-b2b-vcn-travel" || value == "visa-business-prepaid" || value == "visa-corporate-debit"
	}
}
