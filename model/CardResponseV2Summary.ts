import { isly } from "isly"

export interface CardResponseV2Summary {
	cardNumber: string
	createdBy: string
}

export namespace CardResponseV2Summary {
	export const type = isly.object<CardResponseV2Summary>({
		cardNumber: isly.string(),
		createdBy: isly.string(),
	})
	export const is = type.is
}
