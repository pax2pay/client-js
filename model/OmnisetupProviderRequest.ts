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
	cardType: CardTypeSpecification[]
	useAs?: string
}
