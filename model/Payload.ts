import { OrganisationConfig } from "./OrganisationConfig"
import { UserConfig } from "./UserConfig"

/**
 * Configuration
 */
export interface Payload {
	userConfig?: UserConfig
	organisationConfig?: OrganisationConfig
}
