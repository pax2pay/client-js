import { isly } from "isly"
import { MetadataFieldRequest } from "./MetadataFieldRequest"

export interface MetadataFormatRequest {
	name: string
	description?: string
	createDefault?: boolean
	organisations?: string[]
	fields: MetadataFieldRequest[]
	subFormats?: any // TODO
}

export namespace MetadataFormatRequest {
	// export const type = isly.object<MetadataFormatRequest>({
	// 	name: isly.string(),
	// 	description: isly.string().optional(),
	// })
	// export const is = type.is
}
