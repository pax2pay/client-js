import { isly } from "isly"

// OrganisationSecurityConfig
export interface Security {
	enforce2fa?: boolean
	passwordExpirationDays?: number
}
export namespace Security {
	export const type = isly.object<Security>({
		enforce2fa: isly.boolean().optional(),
		passwordExpirationDays: isly.number().optional(),
	})
	export const is = type.is
}
