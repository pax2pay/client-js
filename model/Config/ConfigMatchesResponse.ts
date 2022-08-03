import { InternalOrganisationConfig } from "./InternalOrganisationConfig"
import { OrganisationConfig } from "./OrganisationConfig"
import { UserConfig } from "./UserConfig"
export interface ConfigMatchesResponse {
	value?: string
	config?: UserConfig | OrganisationConfig | InternalOrganisationConfig
}

export namespace ConfigMatchesResponse {
	export function is(value: ConfigMatchesResponse | any): value is ConfigMatchesResponse {
		return (
			typeof value == "object" &&
			(value.value == undefined || typeof value.value == "string") &&
			(value.config == undefined ||
				UserConfig.is(value.config) ||
				OrganisationConfig.is(value.config) ||
				InternalOrganisationConfig.is(value.config))
		)
	}
}
