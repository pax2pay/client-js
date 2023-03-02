import { ProviderCode } from "./ProviderCode"
/**
 * Config related to card types
 */
export interface CardTypesConfig {
	useLegacyCardTypesInResponse?: boolean
	hideCardTypes?: any
	onlyShowCardTypes?: any
	aliases?: Record<ProviderCode, Record<string, string>>
}
