import { isly } from "isly"
import { Field } from "./Field"

export interface Response {
	name: string
	description?: string
	version: number
	isDefault: boolean
	organisations: string[]
	fields: Field[]
	subFormats: Record<MetadataSubFormatRequestType, string[][]> // Fix
}

export namespace Response {
	export const type = isly.object<Response>({
		name: isly.string(),
		description: isly.string().optional(),
		version: isly.number(),
		isDefault: isly.boolean(),
		organisations: isly.string().array(),
		fields: Field.type.array(),
		subFormats: isly.object<Record<MetadataSubFormatRequestType, string[][]>>({
			// Define the object properties for MetadataFieldResponse here
		}),
	})
}

export enum MetadataSubFormatRequestType {}
// Define the enum values for MetadataSubFormatRequestType here
