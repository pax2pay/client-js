import { AccountCreationRequest } from "./AccountCreationRequest"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { CredentialRequest } from "./CredentialRequest"
import { ProviderCode } from "./ProviderCode"

export interface OmnisetupProviderRequest {
	providerCode: ProviderCode
	fundingAccounts: AccountCreationRequest[]
	credentials?: CredentialRequest
	providerSetupCredentials?: CredentialRequest
	cardTypes?: CardTypeSpecification[]
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
			(value.cardTypes == undefined ||
				(Array.isArray(value.cardTypes) &&
					value.cardTypes.every((cardType: any) => CardTypeSpecification.is(cardType))))
		)
	}
}
