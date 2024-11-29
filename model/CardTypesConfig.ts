import { isly } from "isly"
import { ProviderCode } from "./ProviderCode"
/**
 * Config related to card types
 */
export interface CardTypesConfig {
	useLegacyCardTypesInResponse?: boolean
	hideCardTypes?: any
	onlyShowCardTypes?: any
	aliases?: Partial<Record<ProviderCode, Record<string, string>>>
}

export namespace CardTypesConfig {
	export const type = isly.object<CardTypesConfig>({
		useLegacyCardTypesInResponse: isly.boolean().optional(),
		hideCardTypes: isly.any().optional(),
		onlyShowCardTypes: isly.any().optional(),
		aliases: isly.record(ProviderCode.type, isly.record(isly.string(), isly.string())).optional(),
	})
}
