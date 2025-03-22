import { isly } from "isly"

export type MetadataRequest = Record<string, any> & { type?: string }

export namespace MetadataRequest {
	export const type = isly.object<MetadataRequest>({ type: isly.string().optional() })
	export const is = type.is
}
