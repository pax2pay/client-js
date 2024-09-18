import { isly } from "isly"

export interface SecurityConfig {
	enforce2fa?: boolean
	passwordExpirationDays?: number
}
export namespace SecurityConfig {
	export const type = isly.object<SecurityConfig>({
		enforce2fa: isly.boolean().optional(),
		passwordExpirationDays: isly.number().optional(),
	})
}
