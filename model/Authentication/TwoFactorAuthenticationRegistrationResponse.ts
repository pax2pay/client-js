/**
 * On successful registration, information required to be presented to the user will be returned. Much of this cannot be re-obtained, so please do not lose!
 */
export interface TwoFactorAuthenticationRegistrationResponse {
	userId?: string
	backupCodes?: string[]
	qrCode?: string
}

export namespace TwoFactorAuthenticationRegistrationResponse {
	export function is(
		value: TwoFactorAuthenticationRegistrationResponse | any
	): value is TwoFactorAuthenticationRegistrationResponse {
		return (
			typeof value == "object" &&
			(value.userId == undefined || typeof value.userId == "string") &&
			(value.backupCodes == undefined ||
				(Array.isArray(value.backupCodes) && value.backupCodes.every((item: any) => typeof item == "string"))) &&
			(value.qrCode == undefined || typeof value.qrCode == "string")
		)
	}
}
