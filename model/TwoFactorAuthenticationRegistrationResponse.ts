/**
 * On successful registration, information required to be presented to the user will be returned. Much of this cannot be re-obtained, so please do not lose!
 */
export interface TwoFactorAuthenticationRegistrationResponse {
	userId?: string
	backupCodes?: string[]
	qrCode?: string
}
