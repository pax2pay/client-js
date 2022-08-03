/**
 * Config related to card types
 */
export interface CardTypesConfig {
	useLegacyCardTypesInResponse?: boolean
	hideCardTypes?: any //TODO better type and type check
	onlyShowCardTypes?: any //TODO better type and type check
}

export namespace CardTypesConfig {
	export function is(value: CardTypesConfig | any): value is CardTypesConfig {
		return (
			typeof value == "object" &&
			(value.useLegacyCardTypesInResponse == undefined || typeof value.useLegacyCardTypesInResponse == "boolean")
		)
	}
}
