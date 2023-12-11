import { InternalOrganisationConfig } from "./InternalOrganisationConfig"
import { OmnisetupFlags } from "./OmnisetupFlags"
import { OmnisetupProviderRequest } from "./OmnisetupProviderRequest"
import { OrganisationConfig } from "./OrganisationConfig"
import { OrganisationCreateRequest } from "./OrganisationCreateRequest"
import { UserRequest } from "./UserRequest"

export interface OmnisetupRequest {
	flags?: OmnisetupFlags
	organisation: OrganisationCreateRequest
	users: UserRequest[]
	providers: OmnisetupProviderRequest[]
	organisationConfig?: OrganisationConfig
	internalOrganisationConfig?: InternalOrganisationConfig
	sharedRolesets?: string[]
}

export namespace OmnisetupRequest {
	export function is(value: OmnisetupRequest | any): value is OmnisetupRequest {
		return (
			typeof value == "object" &&
			(value.flags == undefined || OmnisetupFlags.is(value.flags)) &&
			OrganisationCreateRequest.is(value.organisation) &&
			Array.isArray(value.users) &&
			value.users.every((user: any) => UserRequest.is(user)) &&
			Array.isArray(value.providers) &&
			value.providers.every((item: any) => OmnisetupProviderRequest.is(item)) &&
			(value.organisationConfig == undefined || OrganisationConfig.is(value.organisationConfig)) &&
			(value.internalOrganisationConfig == undefined ||
				InternalOrganisationConfig.is(value.internalOrganisationConfig)) &&
			(value.sharedRolesets == undefined ||
				(Array.isArray(value.sharedRolesets) && value.sharedRolesets.every((item: any) => typeof item == "string")))
		)
	}
}
