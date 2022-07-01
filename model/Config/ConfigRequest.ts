import { OrganisationConfig } from "./OrganisationConfig"
import { UserConfig } from "./UserConfig"

export interface ConfigRequest {
	config: any
	organisationConfig?: OrganisationConfig
	userConfig?: UserConfig
}
