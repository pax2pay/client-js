import { isly } from "isly"

export interface TwoFactorAuthenticationRegistrationResponse {
	userId: string
	backupCodes?: string[]
	qrCode?: string
}

export namespace TwoFactorAuthenticationRegistrationResponse {
	export const type = isly.object<TwoFactorAuthenticationRegistrationResponse>({
		userId: isly.string(),
		backupCodes: isly.array(isly.string()).optional(),
		qrCode: isly.string().optional(),
	})
	export const is = type.is
}
