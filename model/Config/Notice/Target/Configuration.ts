import { isly } from "isly"
import { Type } from "./Type"

export interface Configuration {
	type: Type
	value?: string
	emails?: string[]
}

export namespace Configuration {
	export const type = isly.object<Configuration>({
		type: Type.type,
		value: isly.string().optional(),
		emails: isly
			.string(/\S+@\S+\.\S+/)
			.array()
			.optional(),
	})
}
