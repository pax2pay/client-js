/**
 * Address of destination
 */
export interface AddressInfo {
	addressLine1: string
	addressLine2?: string
	country: string
	postCode: string
	postTown: string
}

export namespace AddressInfo {
	export function is(value: AddressInfo | any): value is AddressInfo {
		return (
			typeof value == "object" &&
			typeof value.addressLine1 == "string" &&
			(value.addressLine2 == undefined || typeof value.addressLine2 == "string") &&
			typeof value.country == "string" &&
			typeof value.postCode == "string" &&
			typeof value.postTown == "string"
		)
	}
}
