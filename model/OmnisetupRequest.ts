import { InternalOrganisationConfig } from "./InternalOrganisationConfig"
import { OmnisetupFlags } from "./OmnisetupFlags"
import { OmnisetupProviderRequest } from "./OmnisetupProviderRequest"
import { OrganisationConfig } from "./OrganisationConfig"
import { OrganisationCreateRequest } from "./OrganisationCreateRequest"
import { UserRequest } from "./UserRequest"

export interface OmnisetupRequest {
	flags: OmnisetupFlags
	organisation: OrganisationCreateRequest
	users: UserRequest[]
	providers: OmnisetupProviderRequest
	organisationConfig: OrganisationConfig
	internalOrganisationConfig: InternalOrganisationConfig
	sharedRolesets: string[]
}
