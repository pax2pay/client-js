import { AccountCreationRequest } from "./AccountCreationRequest"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CredentialRequest } from "./CredentialRequest"
import { ProviderCode } from "./ProviderCode"
import { SupplierRequest } from "./SupplierRequest"

export interface OmnisetupProviderRequest {
	providerCode: ProviderCode
	fundingAccounts: AccountCreationRequest[]
	credentials?: CredentialRequest
	providerSetupCredentials?: CredentialRequest
	suppliers?: SupplierRequest[]
	cardType: CardTypeSpecification
	useAs?: string
}

export namespace OmnisetupProviderRequest {
	export function is(value: OmnisetupProviderRequest | any): value is OmnisetupProviderRequest {
		return (
			typeof value == "object" &&
			ProviderCode.is(value.providerCode) &&
			Array.isArray(value.fundingAccounts) &&
			value.fundingAccounts.every((fundingAccount: any) => AccountCreationRequest.is(fundingAccount)) &&
			(value.credentials == undefined || CredentialRequest.is(value.credentials)) &&
			(value.providerSetupCredentials == undefined || CredentialRequest.is(value.providerSetupCredentials)) &&
			(value.suppliers == undefined || SupplierRequest.is(value.suppliers)) &&
			CardTypeSpecification.is(value.cardType) &&
			(value.useAs == undefined || typeof value.useAs == "string")
		)
	}
}
