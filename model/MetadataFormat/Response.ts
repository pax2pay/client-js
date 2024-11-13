import { isly } from "isly"
import { Field } from "./Field"
import { SubFormats } from "./SubFormats"

export interface Response {
	name: string
	description?: string
	version: number
	default: boolean
	organisations?: string[]
	fields: Field[]
	subFormats: SubFormats
}

export namespace Response {
	export const type = isly.object<Response>({
		name: isly.string(),
		description: isly.string().optional(),
		version: isly.number(),
		default: isly.boolean(),
		organisations: isly.string().array().optional(),
		fields: Field.type.array(),
		subFormats: SubFormats.type,
	})
	export const is = type.is
}
