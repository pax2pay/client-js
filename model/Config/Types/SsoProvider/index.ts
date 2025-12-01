import { isly } from "isly"
import { Type as SsoProviderType } from "./Type"

export interface SsoProvider {
	enabled?: boolean
	domains?: string[]
	allowPasswordLogin?: boolean
	allowEmailEditing?: boolean
	require2fa?: boolean
}
export namespace SsoProvider {
	export const type = isly.object<SsoProvider>({
		enabled: isly.boolean().optional(),
		domains: isly.string().array().optional(),
		allowPasswordLogin: isly.boolean().optional(),
		allowEmailEditing: isly.boolean().optional(),
		require2fa: isly.boolean().optional(),
	})
	export const is = type.is

	export import Type = SsoProviderType
}
