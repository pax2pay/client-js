import { isly } from "isly"

export interface ExternalSource {
	payer?: string
}
export namespace ExternalSource {
	export const type = isly.object<ExternalSource>({
		payer: isly.string().optional(),
	})
	export const is = type.is
}
