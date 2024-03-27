import { Currency } from "isoly"
import { ProviderCode } from "./ProviderCode"

/**
 * The funding accounts to be created. The provider code element on these must match the provider code element on this object.
 */
export interface AccountCreationRequest {
	providerAccountId?: string
	providerCode: ProviderCode
	friendlyName?: string
	currency: Currency
	specificCustomerId?: string
	realm?: string
}
export namespace AccountCreationRequest {
	export function is(value: AccountCreationRequest | any): value is AccountCreationRequest {
		return (
			typeof value == "object" &&
			(value.providerAccountId == undefined || typeof value.providerAccountId == "string") &&
			ProviderCode.is(value.providerCode) &&
			(value.friendlyName == undefined || typeof value.friendlyName == "string") &&
			(value.realm == undefined || typeof value.realm == "string") &&
			(value.specificCustomerId == undefined || typeof value.specificCustomerId == "string") &&
			Currency.is(value.currency)
		)
	}
}
