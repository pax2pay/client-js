import { OrganisationConfig } from "./Config/Organisation"
import { UserConfig } from "./UserConfig"

/**
 * Configuration
 */
export interface Payload {
	userConfig?: UserConfig
	organisationConfig?: OrganisationConfig
}
