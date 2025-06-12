import * as isoly from "isoly"
import { isly } from "isly"
import { AddressInfo } from "../AddressInfo"

/**
 * Non-beneficiary destination to send this to
 */
export interface Base {
	address?: AddressInfo
	fullName?: string
	currency?: isoly.Currency
	saveAsNewBeneficiary?: boolean
	name?: string
	defaultReference?: string

	// accountNumber?: string
	// sortCode?: string
	// iban?: string
	// bic?: string
	// bankCountry?: string
	// bankName?: string
}

export namespace Base {
	export const type = isly.object<Base>({
		address: AddressInfo.type.optional(),
		fullName: isly.string().optional(),
		currency: isly.fromIs("Currency", isoly.Currency.is).optional(),
		saveAsNewBeneficiary: isly.boolean().optional(),
		name: isly.string().optional(),
		defaultReference: isly.string().optional(),
	})
}
