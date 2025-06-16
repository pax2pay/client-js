import { isly } from "isly"

/**
 * Address of destination
 */
export interface AddressInfo {
	addressLine1: string
	addressLine2?: string
	country: string
	postCode: string
	postTown: string
	state?: string
}

export namespace AddressInfo {
	export const type = isly.object<AddressInfo>({
		addressLine1: isly.string(),
		addressLine2: isly.string().optional(),
		country: isly.string(),
		postCode: isly.string(),
		postTown: isly.string(),
		state: isly.string().optional(),
	})
	export const is = type.is
}
