import * as isoly from "isoly"
import { ProviderCode } from "../Provider/ProviderCode"

/**
 * The funding accounts to be created. The provider code element on these must match the provider code element on this object.
 */
export interface AccountCreationRequest {
	providerAccountId?: string
	providerCode: ProviderCode
	friendlyName?: string
	currency: isoly.Currency
}

export namespace AccountCreationRequest {
	export function is(value: AccountCreationRequest | any): value is AccountCreationRequest {
		return (
			typeof value == "object" &&
			(value.providerAccountId == undefined || typeof value.providerAccountId == "string") &&
			ProviderCode.is(value.providerCode) &&
			(value.friendlyName == undefined || typeof value.friendlyName == "string") &&
			isoly.Currency.is(value.currency)
		)
	}
}
