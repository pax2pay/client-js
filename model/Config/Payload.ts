import { InternalOrganisationConfig } from "./InternalOrganisationConfig"
import { InternalUserConfig } from "./InternalUserConfig"
import { OrganisationConfig } from "./OrganisationConfig"
import { UserConfig } from "./UserConfig"

/**
 * Configuration
 */
export type Payload = UserConfig | OrganisationConfig | InternalOrganisationConfig | InternalUserConfig

export namespace Payload {
	export function is(value: Payload | any): value is Payload {
		return (
			typeof value == "object" &&
			(UserConfig.is(value) ||
				OrganisationConfig.is(value) ||
				InternalOrganisationConfig.is(value) ||
				InternalUserConfig.is(value))
		)
	}
}
