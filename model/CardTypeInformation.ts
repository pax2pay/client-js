import { isly } from "isly"

export interface CardTypeInformation {
	activeCardTypeProfiles?: string[]
	activeCardTypes?: string[]
}

export namespace CardTypeInformation {
	export const type = isly.object<CardTypeInformation>({
		activeCardTypeProfiles: isly.string().array().optional(),
		activeCardTypes: isly.string().array().optional(),
	})
	export const is = type.is
}
