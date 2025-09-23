import { AccountResponse } from "./AccountResponse"
import { CardTypeResponse } from "./CardTypeResponse"
import { CredentialResponse } from "./CredentialResponse"
import { InsertCardOptionRequest } from "./InsertCardOptionRequest"
import { InternalOrganisationConfig } from "./InternalOrganisationConfig"
import { OrganisationConfig } from "./OrganisationConfig"
import { OrganisationResponse } from "./OrganisationResponse"
import { SupplierResponse } from "./SupplierResponse"
import { UserResponse } from "./UserResponse"

export interface OmnisetupResponse {
	messages: string[]
	organisation: OrganisationResponse
	organisationConfig?: OrganisationConfig
	internalOrganisationConfig?: InternalOrganisationConfig
	users: UserResponse
	suppliers: SupplierResponse[]
	credentials: CredentialResponse[]
	accounts: AccountResponse[]
	cardOptions: InsertCardOptionRequest
	cardTypes: CardTypeResponse[]
}
