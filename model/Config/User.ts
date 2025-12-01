import { isly } from "isly"
import { Types } from "./Types"

export interface User {
	cardTypes?: Types.CardTypes
}
export namespace User {
	export const type = isly.object<User>({
		cardTypes: Types.CardTypes.type.optional(),
	})
	export const is = type.is
}
