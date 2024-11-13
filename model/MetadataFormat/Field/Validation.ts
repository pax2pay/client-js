import { isly } from "isly"

export interface Validation {
	optional?: boolean
	length?: { min?: number; max?: number }
	enumerated?: { caseSensitive?: boolean; allowedValues: string[] }
	regex?: { pattern: string }
	numeric?: { min?: number; max?: number }
}

export namespace Validation {
	export const type = isly.object<Validation>({
		optional: isly.boolean().optional(),
		length: isly
			.object({
				min: isly.number().optional(),
				max: isly.number().optional(),
			})
			.optional(),
		enumerated: isly
			.object<{ caseSensitive?: boolean; allowedValues: string[] }>({
				caseSensitive: isly.boolean().optional(),
				allowedValues: isly.string().array(),
			})
			.optional(),
		regex: isly.object<{ pattern: string }>({ pattern: isly.string() }).optional(),
		numeric: isly
			.object({
				min: isly.number().optional(),
				max: isly.number().optional(),
			})
			.optional(),
	})
}
