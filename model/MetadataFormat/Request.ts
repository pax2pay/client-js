import { isly } from "isly"
import { Field } from "./Field"
import { SubFormats } from "./SubFormats"

export interface Request {
	name: string
	description?: string
	default?: boolean
	organisations?: string[]
	fields: Field[]
	subFormats: SubFormats
}

export namespace Request {
	export const type = isly.object<Request>({
		name: isly.string(),
		description: isly.string().optional(),
		default: isly.boolean().optional(),
		organisations: isly.string().array().optional(),
		fields: Field.type.array(),
		subFormats: SubFormats.type,
	})
	export const is = type.is
}
