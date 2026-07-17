import { isly } from "isly"

export interface Address {
	addressLine1?: string
	addressLine2?: string
	country?: string
	postCode?: string
	postTown?: string
	state?: string
}

export namespace Address {
	export const type = isly.object<Address>({
		addressLine1: isly.string().optional(),
		addressLine2: isly.string().optional(),
		country: isly.string().optional(),
		postCode: isly.string().optional(),
		postTown: isly.string().optional(),
		state: isly.string().optional(),
	})
	export const is = type.is
}
