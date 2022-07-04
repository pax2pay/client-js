import { ProviderCode } from "../Provider/ProviderCode"

/**
 * The funding accounts to be created. The provider code element on these must match the provider code element on this object.
 */
export interface AccountCreationRequest {
	providerAccountId?: string
	providerCode: ProviderCode
	friendlyName?: string
	currency: string
}
