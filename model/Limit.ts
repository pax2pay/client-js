import { isly } from "isly"

export interface Limit {
	emails: string[]
	limit: number
}
export namespace Limit {
	export const type = isly.object<Limit>({
		emails: isly.string(/\S+@\S+\.\S+/).array({ criteria: "minLength", value: 1 }),
		limit: isly.number(),
	})
	export const is = type.is
}
