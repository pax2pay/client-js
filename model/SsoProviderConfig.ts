import { isly } from "isly"

export interface SsoProviderConfig {
	enabled?: boolean
	domains?: string[]
	allowPasswordLogin?: boolean
	allowEmailEditing?: boolean
	require2fa?: boolean
}
export namespace SsoProviderConfig {
	export const type = isly.object<SsoProviderConfig>({
		enabled: isly.boolean().optional(),
		domains: isly.string().array().optional(),
		allowPasswordLogin: isly.boolean().optional(),
		allowEmailEditing: isly.boolean().optional(),
		require2fa: isly.boolean().optional(),
	})
	export const is = type.is
}
