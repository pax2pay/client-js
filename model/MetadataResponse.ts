import { isly } from "isly"

export type MetadataResponse = Record<string, any> & { version: number; format: string }

export namespace MetadataResponse {
	export const type = isly.object<MetadataResponse>({ version: isly.number(), format: isly.string() })
	export const is = type.is
}
