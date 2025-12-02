import { isly } from "isly"
import { CardTypes } from "./CardTypes"

export interface User {
	cardTypes?: CardTypes
}
export namespace User {
	export const type = isly.object<User>({
		cardTypes: CardTypes.type.optional(),
	})
	export const is = type.is
}
