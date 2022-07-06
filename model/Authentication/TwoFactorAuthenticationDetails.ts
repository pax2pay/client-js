/**
 * Contains information about two factor authentication.
 */
export interface TwoFactorAuthenticationDetails {
	enabled?: boolean
	provider?: string
}

export namespace TwoFactorAuthenticationDetails {
	export function is(value: TwoFactorAuthenticationDetails | any): value is TwoFactorAuthenticationDetails {
		return (
			typeof value == "object" &&
			(value.enabled == undefined || typeof value.enabled == "boolean") &&
			(value.provider == undefined || typeof value.provider == "string")
		)
	}
}
