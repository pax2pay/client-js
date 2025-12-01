import { AccountResponse } from "./AccountResponse"
import { CardTypeResponse } from "./CardTypeResponse"
import { Config } from "./Config"
import { InternalOrganisation } from "./Config/InternalOrganisation"
import { CredentialResponse } from "./CredentialResponse"
import { InsertCardOptionRequest } from "./InsertCardOptionRequest"
import { OrganisationResponse } from "./OrganisationResponse"
import { SupplierResponse } from "./SupplierResponse"
import { UserResponse } from "./UserResponse"

export interface OmnisetupResponse {
	messages: string[]
	organisation: OrganisationResponse
	organisationConfig?: Config.Organisation
	internalOrganisationConfig?: InternalOrganisation
	users: UserResponse
	suppliers: SupplierResponse[]
	credentials: CredentialResponse[]
	accounts: AccountResponse[]
	cardOptions: InsertCardOptionRequest
	cardTypes: CardTypeResponse[]
}
