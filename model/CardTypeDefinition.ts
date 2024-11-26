import { isly } from "isly"

export interface CardTypeDefinition {
	cardType: string
	representAs: string
}
export namespace CardTypeDefinition {
	export const type = isly.object<CardTypeDefinition>({
		cardType: isly.string(),
		representAs: isly.string(),
	})
	export const is = type.is
}
