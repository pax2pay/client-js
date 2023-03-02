/**
 * Config related to card types
 */
export interface CardTypesConfig {
	useLegacyCardTypesInResponse?: boolean
	hideCardTypes?: any
	onlyShowCardTypes?: any
	aliases?: {
		MODULR?: Record<string, string>
	}
}
