import { ProviderCode } from "../Provider/ProviderCode"

/**
 * Config related to card types
 */
export interface CardTypesConfig {
	useLegacyCardTypesInResponse?: boolean
	hideCardTypes?: Map<ProviderCode, Set<string>>
	onlyShowCardTypes?: Map<ProviderCode, Set<string>>
}

export namespace CardTypesConfig {
	export function is(value: CardTypesConfig | any): value is CardTypesConfig {
		return (
			typeof value == "object" &&
			(value.useLegacyCardTypesInResponse == undefined || typeof value.useLegacyCardTypesInResponse == "boolean") &&
			(value.hideCardTypes == undefined ||
				(value.hideCardTypes instanceof Map &&
					value.hideCardTypes.keys().every((item: any) => ProviderCode.is(item)) &&
					value.hideCardTypes
						.values()
						.every(
							(item: any) =>
								item instanceof Set && [...item.values()].every((setItem: any) => typeof setItem == "string")
						))) &&
			(value.onlyShowCardTypes == undefined ||
				(value.onlyShowCardTypes instanceof Map &&
					value.hideCardTypes.keys().every((item: any) => ProviderCode.is(item)) &&
					value.hideCardTypes
						.values()
						.every(
							(item: any) =>
								item instanceof Set && [...item.values()].every((setItem: any) => typeof setItem == "string")
						)))
		)
	}
}
