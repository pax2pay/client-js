import { isly } from "isly"

export interface ActiveCardType {
	activeCardTypeProfiles?: string[]
	activeCardTypes?: string[]
}

export namespace ActiveCardType {
	export const type = isly.object<ActiveCardType>({
		activeCardTypeProfiles: isly.string().array().optional(),
		activeCardTypes: isly.string().array().optional(),
	})
	export const is = type.is
}
