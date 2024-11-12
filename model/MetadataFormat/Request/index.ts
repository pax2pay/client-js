import { isly } from "isly"
import { Field } from "../Field"
import { SubFormatType as RSubFormatType } from "../SubFormatType"

export interface Request {
	name: string
	description?: string
	createDefault?: boolean
	organisations?: string[]
	fields: Field[]
	subFormats?: {
		top2: string[] | string[][]
		top5?: string[] | string[][]
	}
}

export namespace Request {
	export const type = isly.object<Request>({
		name: isly.string(),
		description: isly.string().optional(),
		createDefault: isly.boolean().optional(),
		organisations: isly.string().array().optional(),
		fields: isly.array(isly.fromIs("Field", Field.is)),
		subFormats: isly
			.object<{
				top2: string[] | string[][]
				top5?: string[] | string[][]
			}>({
				top2: isly.union(isly.string().array(), isly.string().array().array()),
				top5: isly.union(isly.string().array(), isly.string().array().array()).optional(),
			})
			.optional(),
	})
	export const is = type.is

	export import SubFormatType = RSubFormatType
}
