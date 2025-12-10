import { isly } from "isly"
import { Target } from "."

export interface Configuration {
	type: Target.Type
	value?: string
	emails?: string[]
}

export namespace Configuration {
	export const type = isly.object<Configuration>({
		type: Target.Type.type,
		value: isly.string().optional(),
		emails: isly
			.string(/\S+@\S+\.\S+/)
			.array()
			.optional(),
	})
	export const is = type.is
}
