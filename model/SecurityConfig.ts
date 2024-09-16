import { isly } from "isly"

export interface SecurityConfig {
	enforce2fa?: boolean
	passwordExpirationDays?: number
	passwordWith2faExpirationDays?: number
}
export namespace SecurityConfig {
	export const type = isly.object<SecurityConfig>({
		enforce2fa: isly.boolean().optional(),
		passwordExpirationDays: isly.number().optional(),
		passwordWith2faExpirationDays: isly.number().optional(),
	})
}
