import { isly } from "isly"
import { Field as RField } from "./Field"
import { SubFormatType } from "./SubFormatType"

export interface Request {
	name: string
	description?: string
	createDefault?: boolean
	organisations?: string[]
	fields: RField[]
	subFormats?: Partial<Record<SubFormatType, string[][]>>
}

export namespace Request {
	export const type = isly.object<Request>({
		name: isly.string(),
		description: isly.string().optional(),
		createDefault: isly.boolean().optional(),
		organisations: isly.string().array().optional(),
		fields: isly.array(isly.fromIs("Field", Field.is)),
		subFormats: isly
			.object<Partial<Record<SubFormatType, string[][]>>>(
				Object.fromEntries(
					Object.values(SubFormatType).map(subFormatType => [
						subFormatType,
						isly.array(isly.string().array()).optional(),
					])
				)
			)
			.optional(),
	})
	export const is = type.is

	export import Field = RField
}
