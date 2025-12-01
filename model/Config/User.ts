import { isly } from "isly"
import { Types } from "./Types"

export interface User {
	cardTypes?: Types.CardTypes
	securityConfig?: Types.Security
}
export namespace User {
	export const type = isly.object<User>({
		cardTypes: Types.CardTypes.type.optional(),
		securityConfig: Types.Security.type.optional(),
	})
	export const is = type.is
}
