import { isly } from "isly"
import { ProviderCode } from "../../ProviderCode"

// CardTypesConfig
export interface CardTypes {
	useLegacyCardTypesInResponse?: boolean
	hideCardTypes?: any
	onlyShowCardTypes?: any
	aliases?: Partial<Record<ProviderCode, Record<string, string>>>
}

export namespace CardTypes {
	export const type = isly.object<CardTypes>({
		useLegacyCardTypesInResponse: isly.boolean().optional(),
		hideCardTypes: isly.any().optional(),
		onlyShowCardTypes: isly.any().optional(),
		aliases: isly.record(ProviderCode.type, isly.record(isly.string(), isly.string())).optional(),
	})
}
